#!/usr/bin/env python3
# =============================================================================
# tools/extract_frames.py  ——  视频首帧抽取器（构建时，非运行时）
# -----------------------------------------------------------------------------
# 用途：把一支视频的「第一帧」截成一张 jpg，作为卡片封面。
#       这样做的好处：封面是真实图片，file:// 双击打开也能直接显示，
#       不依赖浏览器运行时 canvas（避免本地视频被 canvas 污染导致抽帧失败）。
#
# 依赖（已装在隔离 venv，无需系统安装）：
#   imageio-ffmpeg  ->  自带一个静态 ffmpeg 二进制
#   Pillow          ->  读图、算亮度、缩放、存 jpg
#
# Windows 下的运行方式（必须用这个 venv 的 python，否则找不到依赖）：
#   C:/Users/thsfz/.workbuddy/binaries/python/envs/default/Scripts/python.exe ^
#       tools/extract_frames.py <视频文件> <输出jpg>
#
# 示例：
#   ...\python.exe tools/extract_frames.py ^
#       "assets/ai-station/videos/荒野剑君/荒野剑君-第二集.mp4" ^
#       "assets/ai-station/images/cover-hyjj-ep2.jpg"
#
# 逻辑：在 0.1s / 0.5s / 1.0s 各抽一帧，用亮度挑「最亮」的一张（防黑场开头），
#       缩放到宽 640，存为 quality=82 的 jpg。
# =============================================================================
import os
import sys
import subprocess
import tempfile
from PIL import Image

try:
    from imageio_ffmpeg import get_ffmpeg_exe
except ImportError:
    sys.exit("缺少依赖：请在隔离 venv 运行（需 imageio-ffmpeg + Pillow）。\n"
             "安装：<venv>/Scripts/python.exe -m pip install imageio imageio-ffmpeg Pillow")


def brightness(path):
    im = Image.open(path).convert("L")
    data = list(im.getdata())
    return sum(data) / len(data)


def extract(src, out, width=640, quality=82):
    if not os.path.isfile(src):
        sys.exit("视频文件不存在：%s" % src)
    ff = get_ffmpeg_exe()
    frames = []
    for t in (0.1, 0.5, 1.0):
        tmp = tempfile.mktemp(suffix=".jpg")
        subprocess.run([ff, "-ss", str(t), "-i", src, "-frames:v", "1",
                        "-q:v", "3", tmp], capture_output=True)
        if os.path.exists(tmp) and os.path.getsize(tmp) > 0:
            frames.append(tmp)
    if not frames:
        sys.exit("抽帧失败：视频无法解码或路径错误 -> %s" % src)
    best = max(frames, key=brightness)
    im = Image.open(best).convert("RGB")
    w, h = im.size
    th = int(width * h / w / 2) * 2
    im = im.resize((width, th))
    out_dir = os.path.dirname(out)
    if out_dir:
        os.makedirs(out_dir, exist_ok=True)
    im.save(out, "JPEG", quality=quality)
    for f in frames:
        try:
            os.remove(f)
        except OSError:
            pass
    print("OK  %s  (%dx%d)" % (out, width, th))


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit("用法：python extract_frames.py <视频文件> <输出jpg>")
    extract(sys.argv[1], sys.argv[2])

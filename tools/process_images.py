# -*- coding: utf-8 -*-
"""
process_images.py — 电商产品图批量处理流水线（对应「处理 Agent」的实现）。

对每张图片执行：
  1) 自动裁剪为 800x800 正方形（cover 居中裁剪，保证内容不被压扁）
  2) 右下角添加品牌水印「ShopFlow」
  3) 生成 200x200 缩略图（同样带水印）
  4) 转换为 WebP 格式（quality=85）

并输出每张图的原始/处理后尺寸、文件大小、压缩率、状态、耗时，
写入 report_data.json 与 js/report-data.js 供报告页直接读取。

依赖：Pillow
用法（演示）：
  python tools/process_images.py --in-dir assets/batch/in --out-dir assets/batch/out \
      --report-json assets/batch/out/report_data.json \
      --report-js js/report-data.js
用法（你的真实图片）：
  python tools/process_images.py --in-dir <你的图目录> --out-dir <输出目录> \
      --report-js js/report-data.js
"""
import os
import sys
import json
import argparse
import datetime
from PIL import Image, ImageDraw, ImageFont

# ---- 处理方案（与规划 Agent 输出一致，可被 CLI 覆盖）----
DEFAULTS = {
    "crop": "center cover → 800x800",
    "watermark": "ShopFlow",
    "watermark_pos": "右下角",
    "watermark_opacity": 0.6,
    "thumbnail": "200x200",
    "format": "WebP (quality=85)",
    "naming": "{sku}_800.webp / {sku}_thumb.webp",
    "warn_size_kb": 180,      # 输出 > 此值标记为 warning
    "min_dim": 400,           # 原始任一边 < 此值判为 failed
}


def get_font(size):
    for p in ["C:/Windows/Fonts/arial.ttf",
              "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            pass
    return ImageFont.load_default()


def cover_crop(img, size):
    """等比放大到 cover，再居中裁剪为 size×size 正方形。"""
    w, h = img.size
    ratio = max(size / w, size / h)
    nw, nh = int(w * ratio), int(h * ratio)
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - size) // 2
    top = (nh - size) // 2
    return img.crop((left, top, left + size, top + size))


def add_watermark(img, text, size, opacity):
    base = img.convert("RGBA")
    d = ImageDraw.Draw(base)
    font = get_font(size)
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad = max(8, int(size * 0.3))
    pw, ph = tw + pad * 2, th + pad * 2
    x = base.width - pw - 14
    y = base.height - ph - 14
    d.rounded_rectangle([x, y, x + pw, y + ph], radius=ph // 2,
                        fill=(20, 20, 20, int(200 * opacity)))
    d.text((x + pad + 1, y + pad // 2 + 1), text, font=font, fill=(0, 0, 0, 120))
    d.text((x + pad, y + pad // 2), text, font=font, fill=(255, 255, 255, 255))
    return base


def process_one(path, out_dir, opts):
    name = os.path.splitext(os.path.basename(path))[0]
    orig = Image.open(path)
    ow, oh = orig.size
    orig_size = os.path.getsize(path)
    rec = {
        "id": name, "sku": name, "originalName": os.path.basename(path),
        "origW": ow, "origH": oh, "origSizeKB": round(orig_size / 1024, 1),
        "beforeSrc": "assets/batch/in/" + os.path.basename(path),
    }
    if ow < opts["min_dim"] or oh < opts["min_dim"]:
        rec.update(status="failed",
                   error="原始尺寸过小 (<%dpx)，无法保证 800x800 输出质量" % opts["min_dim"],
                   afterSrc=None, thumbSrc=None, outW=None, outH=None,
                   outSizeKB=None, thumbSizeKB=None, compressionPct=None)
        return rec
    sq = cover_crop(orig, 800)
    sq_wm = add_watermark(sq, opts["watermark"], 34, opts["watermark_opacity"])
    thumb = cover_crop(orig, 200)
    thumb_wm = add_watermark(thumb, opts["watermark"], 14, opts["watermark_opacity"])

    out_path = os.path.join(out_dir, name + "_800.webp")
    thumb_path = os.path.join(out_dir, name + "_thumb.webp")
    sq_wm.convert("RGB").save(out_path, "WEBP", quality=85)
    thumb_wm.convert("RGB").save(thumb_path, "WEBP", quality=85)

    out_size = os.path.getsize(out_path)
    thumb_size = os.path.getsize(thumb_path)
    comp = round((1 - out_size / orig_size) * 100, 1)
    status, note = "success", ""
    if out_size > opts["warn_size_kb"] * 1024:
        status, note = "warning", "输出文件体积偏大 (>%dKB)" % opts["warn_size_kb"]
    rec.update(
        status=status, note=note, outW=800, outH=800,
        outSizeKB=round(out_size / 1024, 1),
        thumbSizeKB=round(thumb_size / 1024, 1),
        compressionPct=comp,
        afterSrc="assets/batch/out/" + name + "_800.webp",
        thumbSrc="assets/batch/out/" + name + "_thumb.webp",
    )
    return rec


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--in-dir", required=True)
    ap.add_argument("--out-dir", required=True)
    ap.add_argument("--watermark", default=DEFAULTS["watermark"])
    ap.add_argument("--quality", type=int, default=85)
    ap.add_argument("--report-json", default=None)
    ap.add_argument("--report-js", default=None)
    args = ap.parse_args()

    opts = dict(DEFAULTS)
    opts["watermark"] = args.watermark

    os.makedirs(args.out_dir, exist_ok=True)
    files = sorted([f for f in os.listdir(args.in_dir)
                    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.bmp'))])

    items, ok = [], 0
    t0 = datetime.datetime.now()
    for f in files:
        items.append(process_one(os.path.join(args.in_dir, f), args.out_dir, opts))
    dt = (datetime.datetime.now() - t0).total_seconds()

    counts = {"success": 0, "warning": 0, "failed": 0}
    for it in items:
        counts[it["status"]] += 1
    tot_orig = sum(it["origSizeKB"] for it in items if it["origSizeKB"])
    tot_out = sum(it["outSizeKB"] for it in items if it["outSizeKB"])
    comps = [it["compressionPct"] for it in items if it["compressionPct"] is not None]
    avg_comp = round(sum(comps) / len(comps), 1) if comps else 0

    plan = {
        "generatedAt": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
        "crop": opts["crop"], "watermark": opts["watermark"],
        "watermarkPos": opts["watermark_pos"], "watermarkOpacity": opts["watermark_opacity"],
        "thumbnail": opts["thumbnail"], "format": opts["format"], "naming": opts["naming"],
        "warnSizeKB": opts["warn_size_kb"], "minDim": opts["min_dim"],
    }
    data = {
        "plan": plan,
        "summary": {
            "total": len(items), "success": counts["success"],
            "warning": counts["warning"], "failed": counts["failed"],
            "successRate": round(counts["success"] / len(items) * 100, 1) if items else 0,
            "avgCompressionPct": avg_comp,
            "totalOrigKB": round(tot_orig, 1), "totalOutKB": round(tot_out, 1),
            "totalSavedKB": round(tot_orig - tot_out, 1),
            "elapsedSec": round(dt, 2),
        },
        "items": items,
    }
    if args.report_json:
        with open(args.report_json, "w", encoding="utf-8") as fh:
            json.dump(data, fh, ensure_ascii=False, indent=2)
    if args.report_js:
        with open(args.report_js, "w", encoding="utf-8") as fh:
            fh.write("window.REPORT_DATA = " + json.dumps(data, ensure_ascii=False) + ";")
    print("完成：%d 张，成功=%d 告警=%d 失败=%d，平均压缩率=%s%%，耗时=%ss"
          % (len(items), counts["success"], counts["warning"], counts["failed"], avg_comp, round(dt, 2)))


if __name__ == "__main__":
    main()

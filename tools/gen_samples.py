# -*- coding: utf-8 -*-
"""
gen_samples.py — 生成 20 张合成电商产品图（仅用于演示 Agent 批量处理工作流）。
真实场景下请替换为你的产品图目录。

依赖：Pillow (已随 managed Python 预装)
用法：
  python tools/gen_samples.py
输出：webProject/assets/batch/in/SKU-00X.jpg
"""
import os
import random
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
IN_DIR = os.path.normpath(os.path.join(HERE, "..", "assets", "batch", "in"))
os.makedirs(IN_DIR, exist_ok=True)

PRODUCTS = [
    "无线蓝牙耳机", "保温杯", "机械键盘", "瑜伽垫", "香薰蜡烛",
    "运动水壶", "帆布包", "桌面台灯", "陶瓷餐具", "防晒霜",
    "蓝牙音箱", "充电宝", "护手霜", "宠物窝", "笔记本",
    "咖啡豆", "护眼仪", "收纳盒", "儿童积木", "香氛喷雾",
]
random.seed(20260810)


def get_font(size, cjk=False):
    cands = []
    if cjk:
        cands += ["C:/Windows/Fonts/msyh.ttc", "C:/Windows/Fonts/msyh.ttf",
                  "C:/Windows/Fonts/simhei.ttf", "C:/Windows/Fonts/simsum.ttc"]
    cands += ["C:/Windows/Fonts/arial.ttf",
              "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
    for p in cands:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            pass
    return ImageFont.load_default()


PALETTE = [
    ("#f6d7c4", "#e8a87c"), ("#cde7e3", "#7bbcb0"), ("#e7d6f0", "#b08fd4"),
    ("#fde2cf", "#f0a868"), ("#d6e4f0", "#7fa8d4"), ("#e9f0d6", "#a7c46c"),
    ("#f3d6e0", "#d98aa8"), ("#d9e8d4", "#86b46a"),
]


def gradient(w, h, c1, c2):
    img = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(img)
    r1, g1, b1 = int(c1[1:3], 16), int(c1[3:5], 16), int(c1[5:7], 16)
    r2, g2, b2 = int(c2[1:3], 16), int(c2[3:5], 16), int(c2[5:7], 16)
    for y in range(h):
        t = y / h
        r = int(r1 + (r2 - r1) * t)
        g = int(g1 + (g2 - g1) * t)
        b = int(b1 + (b2 - b1) * t)
        d.line([(0, y), (w, y)], fill=(r, g, b))
    return img


def make(w, h, idx, name):
    img = gradient(w, h, *PALETTE[idx % len(PALETTE)])
    d = ImageDraw.Draw(img)
    bw, bh = int(w * 0.42), int(h * 0.42)
    bx, by = (w - bw) // 2, (h - bh) // 2
    d.rounded_rectangle([bx, by, bx + bw, by + bh], radius=40, fill=(255, 255, 255))
    d.ellipse([bx + bw * 0.2, by + bh * 0.2, bx + bw * 0.8, by + bh * 0.8],
              fill=PALETTE[idx % len(PALETTE)][1])
    f1 = get_font(48)
    f2 = get_font(34, cjk=True)
    sku = "SKU-%03d" % (idx + 1)
    d.text((w // 2, int(h * 0.08)), sku, font=f1, fill=(70, 70, 70), anchor="mm")
    d.text((w // 2, int(h * 0.92)), name, font=f2, fill=(70, 70, 70), anchor="mm")
    if idx == 5:  # 制造一张高噪点图，用于演示「体积偏大」告警
        noise = Image.effect_noise((w, h), 60)
        img = Image.blend(img.convert("RGB"), noise.convert("RGB"), 0.28)
    return img, sku


for i, pname in enumerate(PRODUCTS):
    # 第 19 张故意做小 (360x360)，用于演示「原始尺寸不足」失败
    if i == 18:
        w = h = 360
    else:
        w = random.choice([1200, 1400, 1000, 1600, 900, 800, 1500, 1280, 1100, 1300])
        h = random.choice([1500, 1200, 1000, 1600, 800, 1500, 1280, 1400, 1350, 1100])
    img, sku = make(w, h, i, pname)
    img.save(os.path.join(IN_DIR, sku + ".jpg"), quality=88)

print("已生成 %d 张示例产品图 -> %s" % (len(PRODUCTS), IN_DIR))

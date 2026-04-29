"""
Reels 2 Generator - imagini statice + text overlay -> MP4 vertical 1080x1920
MoviePy 2.x + Pillow
"""

import os
import sys
import subprocess
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

def install_deps():
    packages = ["moviepy>=2.0", "Pillow", "numpy"]
    for pkg in packages:
        subprocess.check_call([sys.executable, "-m", "pip", "install", pkg, "-q"])

install_deps()

from PIL import Image, ImageDraw, ImageFont
import numpy as np
from moviepy import ImageClip, concatenate_videoclips
from moviepy.video.fx import CrossFadeIn, CrossFadeOut

# ── Configurare ───────────────────────────────────────────────────────────────
INPUT_FOLDER  = r"D:\Sorin\SIM\AI\Ale mele\Excedo\Daria\Code\2"
OUTPUT_FILE   = os.path.join(INPUT_FOLDER, "Reels2_text.mp4")
W, H          = 1080, 1920
DURATION      = 4.0
FADE          = 0.3
BG_COLOR      = (255, 255, 255)
FPS           = 30

SUBTITLE      = "Daria Teodora | Râu Alb, Dâmbovița"
FONT_SIZE_TITLE    = 60
FONT_SIZE_SUBTITLE = 40
MARGIN_BOTTOM      = 280
OUTLINE_WIDTH      = 2

TITLES = [
    "Tavă cadou cu miere",
    "Coș oval cu miere",
    "Cuburi de ceară cu lavandă",
    "Lumânări stup",
    "Mână cu coș",
    "Lumânări în borcan",
    "Bloc de ceară",
]
# ─────────────────────────────────────────────────────────────────────────────

EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}

def get_font(size):
    font_paths = [
        r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\Arial.ttf",
        r"C:\Windows\Fonts\arialbd.ttf",
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            return ImageFont.truetype(fp, size)
    return ImageFont.load_default()

def draw_text_with_outline(draw, text, font, x, y, fill, outline, outline_width):
    for dx in range(-outline_width, outline_width + 1):
        for dy in range(-outline_width, outline_width + 1):
            if dx != 0 or dy != 0:
                draw.text((x + dx, y + dy), text, font=font, fill=outline)
    draw.text((x, y), text, font=font, fill=fill)

def fit_image_on_canvas(img_path, title):
    img = Image.open(img_path).convert("RGB")
    img.thumbnail((W, H), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG_COLOR)
    x = (W - img.width) // 2
    y = (H - img.height) // 2
    canvas.paste(img, (x, y))

    draw = ImageDraw.Draw(canvas)
    font_title    = get_font(FONT_SIZE_TITLE)
    font_subtitle = get_font(FONT_SIZE_SUBTITLE)

    bbox_title    = draw.textbbox((0, 0), title, font=font_title)
    bbox_subtitle = draw.textbbox((0, 0), SUBTITLE, font=font_subtitle)
    w_title    = bbox_title[2] - bbox_title[0]
    h_title    = bbox_title[3] - bbox_title[1]
    w_subtitle = bbox_subtitle[2] - bbox_subtitle[0]
    h_subtitle = bbox_subtitle[3] - bbox_subtitle[1]

    spacing = 10
    total_h = h_title + spacing + h_subtitle

    y_title    = H - MARGIN_BOTTOM - total_h
    y_subtitle = y_title + h_title + spacing

    x_title    = (W - w_title) // 2
    x_subtitle = (W - w_subtitle) // 2

    draw_text_with_outline(draw, title,    font_title,    x_title,    y_title,    (30,30,30), (255,255,255), OUTLINE_WIDTH)
    draw_text_with_outline(draw, SUBTITLE, font_subtitle, x_subtitle, y_subtitle, (30,30,30), (255,255,255), OUTLINE_WIDTH)

    return np.array(canvas)

def make_clip(img_path, title):
    frame = fit_image_on_canvas(img_path, title)
    clip = ImageClip(frame, duration=DURATION)
    clip = clip.with_effects([CrossFadeIn(FADE), CrossFadeOut(FADE)])
    return clip

def get_images(folder):
    files = sorted(
        f for f in os.listdir(folder)
        if os.path.splitext(f)[1].lower() in EXTENSIONS
    )
    if not files:
        raise FileNotFoundError(f"Nicio imagine gasita in {folder}")
    return [os.path.join(folder, f) for f in files]

def main():
    print(f"Folder sursa: {INPUT_FOLDER}")
    images = get_images(INPUT_FOLDER)
    print(f"Imagini gasite: {len(images)}")

    if len(images) != len(TITLES):
        print(f"ATENTIE: {len(images)} imagini dar {len(TITLES)} titluri definite!")

    pairs = list(zip(images, TITLES))
    for img, title in pairs:
        print(f"  {os.path.basename(img)} -> \"{title}\"")

    clips = [make_clip(img, title) for img, title in pairs]

    final = concatenate_videoclips(clips, method="compose", padding=-FADE)

    print(f"\nGenerez {OUTPUT_FILE} ...")
    final.write_videofile(
        OUTPUT_FILE,
        fps=FPS,
        codec="libx264",
        audio=False,
        preset="medium",
        ffmpeg_params=["-crf", "18"],
        logger=None,
    )
    print(f"\nGata! Fisier salvat: {OUTPUT_FILE}")
    print(f"Durata totala: {final.duration:.1f} secunde")

if __name__ == "__main__":
    main()

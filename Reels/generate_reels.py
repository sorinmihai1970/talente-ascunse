"""
Reels Generator - imagini statice -> MP4 vertical 1080x1920
MoviePy 2.x compatible
"""

import os
import sys
import subprocess

def install_deps():
    packages = ["moviepy>=2.0", "Pillow", "numpy"]
    for pkg in packages:
        subprocess.check_call([sys.executable, "-m", "pip", "install", pkg, "-q"])

install_deps()

from PIL import Image
import numpy as np
from moviepy import ImageClip, concatenate_videoclips

# ── Configurare ───────────────────────────────────────────────────────────────
INPUT_FOLDER  = r"D:\Sorin\SIM\AI\Ale mele\Excedo\Daria\2"
OUTPUT_FILE   = os.path.join(INPUT_FOLDER, "Reels2.mp4")
W, H          = 1080, 1920          # vertical 9:16
DURATION      = 2.5                 # secunde per imagine
FADE          = 0.3                 # secunde fade in/out
BG_COLOR      = (255, 255, 255)     # alb
FPS           = 30
# ─────────────────────────────────────────────────────────────────────────────

EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}

def get_images(folder):
    files = sorted(
        f for f in os.listdir(folder)
        if os.path.splitext(f)[1].lower() in EXTENSIONS
    )
    if not files:
        raise FileNotFoundError(f"Nicio imagine gasita in {folder}")
    return [os.path.join(folder, f) for f in files]

def fit_image_on_canvas(img_path):
    """Incadreaza imaginea pe canvas alb 1080x1920 (fit, nu crop)."""
    img = Image.open(img_path).convert("RGB")
    img.thumbnail((W, H), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG_COLOR)
    x = (W - img.width) // 2
    y = (H - img.height) // 2
    canvas.paste(img, (x, y))
    return np.array(canvas)

def make_clip(img_path):
    frame = fit_image_on_canvas(img_path)
    clip = ImageClip(frame, duration=DURATION)
    clip = clip.with_effects([
        __import__('moviepy.video.fx', fromlist=['CrossFadeIn']).CrossFadeIn(FADE),
        __import__('moviepy.video.fx', fromlist=['CrossFadeOut']).CrossFadeOut(FADE),
    ])
    return clip

def main():
    print(f"Folder sursa: {INPUT_FOLDER}")
    images = get_images(INPUT_FOLDER)
    print(f"Imagini gasite: {len(images)}")
    for p in images:
        print(f"  {os.path.basename(p)}")

    clips = [make_clip(p) for p in images]

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

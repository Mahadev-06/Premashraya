import os
from PIL import Image

images_dir = r"c:\Users\Lenovo\Desktop\Clientweb\comfort-care-web\public\images"

files = os.listdir(images_dir)

MAX_WIDTH = 1920
MAX_HEIGHT = 1920

for filename in files:
    ext = os.path.splitext(filename)[1].lower()
    if ext in [".jpg", ".jpeg", ".png"]:
        src_path = os.path.join(images_dir, filename)
        
        # Determine clean base name
        base = filename
        if base.lower().endswith(".jpg.jpeg"):
            base = base[:-9]
        elif base.lower().endswith(".jpeg"):
            base = base[:-5]
        elif base.lower().endswith(".jpg"):
            base = base[:-4]
        elif base.lower().endswith(".png"):
            base = base[:-4]
            
        dst_filename = f"{base}.webp"
        dst_path = os.path.join(images_dir, dst_filename)
        
        try:
            with Image.open(src_path) as img:
                # Resize if larger than 1920px
                width, height = img.size
                if width > MAX_WIDTH or height > MAX_HEIGHT:
                    img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
                
                if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                
                img.save(dst_path, "WEBP", quality=82, optimize=True)
                print(f"Converted: {filename} ({width}x{height}) -> {dst_filename}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

print("All images converted to WebP successfully!")

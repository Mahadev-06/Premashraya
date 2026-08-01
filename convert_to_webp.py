import os
from PIL import Image

images_dir = r"c:\Users\Lenovo\Desktop\Clientweb\comfort-care-web\public\images"

files = os.listdir(images_dir)

converted_count = 0
for filename in files:
    ext = os.path.splitext(filename)[1].lower()
    if ext in [".jpg", ".jpeg", ".png"]:
        src_path = os.path.join(images_dir, filename)
        
        # Base name without extension
        base_name = os.path.splitext(filename)[0]
        # Handle double extension like gallery13.jpg.jpeg
        if base_name.lower().endswith(".jpg") or base_name.lower().endswith(".png"):
            base_name = os.path.splitext(base_name)[0]
            
        dst_filename = f"{base_name}.webp"
        dst_path = os.path.join(images_dir, dst_filename)
        
        try:
            with Image.open(src_path) as img:
                if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                img.save(dst_path, "WEBP", quality=88, optimize=True)
                print(f"Converted: {filename} -> {dst_filename}")
                converted_count += 1
        except Exception as e:
            print(f"Error converting {filename}: {e}")

print(f"Finished! Total images converted to WebP: {converted_count}")

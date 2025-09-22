#!/bin/bash

# 圖片優化腳本 - 2025年最佳實踐
echo "🚀 開始圖片優化..."

# 創建備份目錄
if [ ! -d "public/images_backup" ]; then
    echo "📁 創建備份目錄..."
    cp -r public/images public/images_backup
    echo "✅ 原始圖片已備份到 public/images_backup"
fi

# 壓縮大型圖片檔案
echo "🔧 壓縮大型圖片檔案..."

# 壓縮 hero 圖片
echo "壓縮 hero 圖片..."
sips -s format jpeg -s formatOptions 80 public/images/hero1.png --out public/images/hero1_temp.jpg 2>/dev/null
sips -s format jpeg -s formatOptions 80 public/images/hero3.png --out public/images/hero3_temp.jpg 2>/dev/null

# 替換原始檔案
if [ -f "public/images/hero1_temp.jpg" ]; then
    mv public/images/hero1_temp.jpg public/images/hero1.jpg
    rm public/images/hero1.png
    echo "✅ hero1.png -> hero1.jpg (壓縮完成)"
fi

if [ -f "public/images/hero2_compressed.jpg" ]; then
    mv public/images/hero2_compressed.jpg public/images/hero2.jpg
    rm public/images/hero2.png
    echo "✅ hero2.png -> hero2.jpg (壓縮完成)"
fi

if [ -f "public/images/hero3_temp.jpg" ]; then
    mv public/images/hero3_temp.jpg public/images/hero3.jpg
    rm public/images/hero3.png
    echo "✅ hero3.png -> hero3.jpg (壓縮完成)"
fi

if [ -f "public/images/hero4_compressed.jpg" ]; then
    mv public/images/hero4_compressed.jpg public/images/hero4.jpg
    rm public/images/hero4.png
    echo "✅ hero4.png -> hero4.jpg (壓縮完成)"
fi

# 替換大型 JPG 檔案
if [ -f "public/images/nail_work_8574_compressed.jpg" ]; then
    mv public/images/nail_work_8574_compressed.jpg public/images/nail_work_8574.jpg
    rm public/images/nail_work_8574.JPG
    echo "✅ nail_work_8574.JPG -> nail_work_8574.jpg (壓縮完成)"
fi

if [ -f "public/images/nail_work_3993_compressed.jpg" ]; then
    mv public/images/nail_work_3993_compressed.jpg public/images/nail_work_3993.jpg
    rm public/images/nail_work_3993.JPG
    echo "✅ nail_work_3993.JPG -> nail_work_3993.jpg (壓縮完成)"
fi

if [ -f "public/images/studio1_compressed.jpg" ]; then
    mv public/images/studio1_compressed.jpg public/images/studio1.jpg
    rm public/images/studio1.png
    echo "✅ studio1.png -> studio1.jpg (壓縮完成)"
fi

# 壓縮其他大型檔案
echo "壓縮其他大型檔案..."
for file in public/images/studio_indoor_*.jpg public/images/nail_work_4405.jpg; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .jpg)
        sips -s format jpeg -s formatOptions 80 "$file" --out "public/images/${filename}_temp.jpg" 2>/dev/null
        if [ -f "public/images/${filename}_temp.jpg" ]; then
            mv "public/images/${filename}_temp.jpg" "$file"
            echo "✅ 壓縮完成: $file"
        fi
    fi
done

echo "📊 檢查壓縮效果..."
echo "原始大小 vs 壓縮後大小:"
ls -lah public/images/ | grep -E "\.(jpg|jpeg|png)$" | head -10

echo "🎉 圖片優化完成！"
echo "💡 接下來需要更新程式碼中的圖片路徑 (.png -> .jpg)"

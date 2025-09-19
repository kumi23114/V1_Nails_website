# 圖片優化指南

## 🚨 發現的問題

以下圖片文件過大，嚴重影響網站性能：

| 文件名 | 當前大小 | 建議大小 | 優化比例 |
|--------|----------|----------|----------|
| nail_work_8574.JPG | 9.3MB | <500KB | -95% |
| nail_work_3993.JPG | 8.6MB | <500KB | -94% |
| studio1.png | 5.7MB | <1MB | -82% |
| hero2.png | 5.4MB | <1MB | -81% |
| hero4.png | 5.2MB | <1MB | -81% |
| studio_indoor_8741.jpg | 3.0MB | <800KB | -73% |
| studio_indoor_8746.jpg | 2.8MB | <800KB | -71% |
| studio_indoor_8742.jpg | 2.6MB | <800KB | -69% |
| nail_work_4405.jpg | 2.1MB | <500KB | -76% |
| hero3.png | 2.0MB | <1MB | -50% |

**總計可減少約 40MB+ 的圖片大小！**

## 🛠️ 優化方法

### 方法 1: 使用線上工具
1. **TinyPNG** (https://tinypng.com/)
   - 支援 PNG/JPG 格式
   - 無損壓縮，品質保持良好
   - 免費版每次最多 20 張圖片

2. **Squoosh** (https://squoosh.app/)
   - Google 開發的圖片優化工具
   - 支援多種格式轉換
   - 可調整品質和大小

### 方法 2: 使用命令行工具

```bash
# 安裝 ImageMagick (macOS)
brew install imagemagick

# 批量優化 JPG 文件 (品質 80%)
find public/images -name "*.jpg" -o -name "*.JPG" | xargs -I {} magick {} -quality 80 -strip {}

# 批量優化 PNG 文件
find public/images -name "*.png" | xargs -I {} magick {} -quality 80 -strip {}

# 調整圖片尺寸 (最大寬度 1920px)
find public/images -name "*.jpg" -o -name "*.JPG" -o -name "*.png" | xargs -I {} magick {} -resize "1920x1920>" {}
```

### 方法 3: 使用 Next.js Image 組件

```jsx
import Image from 'next/image'

// 替換現有的 <img> 標籤
<Image
  src="/images/hero1.png"
  alt="Hero image"
  width={1920}
  height={1080}
  quality={80}
  priority={true} // 對於首屏圖片
/>
```

## 📋 優化檢查清單

- [ ] 將所有圖片壓縮到合理大小
- [ ] Hero 圖片 < 1MB
- [ ] 作品集圖片 < 500KB  
- [ ] 工作室圖片 < 800KB
- [ ] 考慮使用 WebP 格式
- [ ] 實施懶加載
- [ ] 使用 Next.js Image 組件

## 🎯 預期效果

優化後預期效果：
- **首頁加載時間減少 60-80%**
- **總圖片大小從 ~50MB 降至 ~10MB**
- **移動端體驗大幅改善**
- **SEO 分數提升**

## ⚠️ 注意事項

1. **備份原始圖片**：優化前請備份原始文件
2. **測試品質**：確保優化後圖片品質可接受
3. **漸進式優化**：先優化最大的文件
4. **監控性能**：使用 Lighthouse 測試優化效果

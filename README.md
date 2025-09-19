# 美甲工作室網站模板

## 專案概述

這是一個專為美甲工作室設計的現代化、響應式單頁網站模板。網站採用移動優先的設計理念，提供美觀的用戶界面和流暢的用戶體驗。

## 技術架構

- **框架**: Next.js
- **樣式**: Tailwind CSS
- **字體**: 
  - 中文: Noto Sans TC
  - 英文: Poppins
  - 標題: Cormorant Garamond
- **動畫**: CSS動畫 + 自定義動畫組件
- **部署**: Vercel (推薦)

## 專案結構

```
/
├── /pages/                 # Next.js 頁面
│   ├── _app.js            # 全局應用組件
│   ├── _document.js       # 文檔配置
│   └── index.js           # 主頁面
├── /components/           # React 組件
│   ├── /layout/           # 布局組件
│   │   ├── Navbar.js      # 導航欄
│   │   └── Footer.js      # 頁腳
│   ├── /sections/         # 頁面區塊組件
│   │   ├── Hero.js        # 首頁橫幅
│   │   ├── Portfolio.js   # 作品集展示
│   │   ├── Services.js    # 服務項目
│   │   ├── Nailist.js     # 美甲師介紹
│   │   ├── Booking.js     # 預約系統
│   │   ├── Policy.js      # 預約須知
│   │   ├── Location.js    # 位置資訊
│   │   └── Contact.js     # 聯絡方式
│   └── /ui/               # UI 組件
│       ├── Button.js      # 按鈕組件
│       ├── SectionHeader.js # 區塊標題
│       ├── AnimatedText.js # 動畫文字
│       ├── StaggeredAnimation.js # 交錯動畫
│       ├── PortfolioCarousel.js # 作品輪播
│       ├── MagicBento.js  # 魔法便當效果
│       └── FloatingCTA.js # 浮動行動按鈕
├── /contexts/             # React Context
│   └── LanguageContext.js # 多語言支援
├── /data/                 # 數據文件
│   └── content.js         # 網站內容配置
├── /styles/               # 樣式文件
│   └── globals.css        # 全局樣式
├── /public/               # 靜態資源
│   └── /images/           # 圖片資源
├── tailwind.config.js     # Tailwind 配置
└── package.json           # 依賴配置
```

## 主要功能

### 🎨 視覺設計
- **響應式設計**: 移動優先，支援所有設備尺寸
- **現代化UI**: 使用 Tailwind CSS 構建的美觀界面
- **動畫效果**: 豐富的 CSS 動畫和過渡效果
- **配色方案**: 優雅的米白色系配色，搭配金棕色文字，營造溫暖自然的氛圍

### 🌐 多語言支援
- 支援中文和英文
- 使用 React Context 管理語言狀態
- 所有文字內容集中管理，易於維護

### 📱 用戶體驗
- **流暢導航**: 平滑滾動到各個區塊
- **浮動CTA**: 右下角浮動行動按鈕，包含聯絡和預約功能
- **響應式組件**: 所有組件都適配不同螢幕尺寸
- **觸控友好**: 優化觸控設備的交互體驗

### 🖼️ 內容展示
- **作品集展示**: 響應式圖片網格和輪播展示
- **服務介紹**: 清晰的服務項目和價格展示
- **美甲師介紹**: 專業的美甲師個人介紹
- **位置資訊**: 整合地圖和聯絡資訊

## 快速開始

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 構建生產版本
```bash
npm run build
```

### 啟動生產版本
```bash
npm start
```

## 自定義配置

### 更新內容
編輯 `/data/content.js` 文件來更新網站文字內容、價格、聯絡資訊等。

### 修改樣式
- 全局樣式: 編輯 `/styles/globals.css`
- 組件樣式: 使用 Tailwind CSS 類名或創建 CSS 模組
- 配色方案: 在 `tailwind.config.js` 中自定義顏色

### 添加圖片
將新圖片放入 `/public/images/` 目錄，然後在 `content.js` 中更新圖片路徑。

## 部署

### Vercel (推薦)
1. 將代碼推送到 GitHub
2. 在 Vercel 中導入專案
3. 自動部署和更新

### 其他平台
網站可以部署到任何支援靜態網站的平台，如 Netlify、GitHub Pages 等。

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移動瀏覽器

## 性能優化

- 圖片懶加載
- CSS 和 JavaScript 代碼分割
- 響應式圖片
- 優化的動畫性能

## 維護和更新

- 定期更新依賴包
- 檢查並優化圖片大小
- 監控網站性能指標
- 根據用戶反饋持續改進

## 授權

此模板僅供學習和商業使用參考。請根據您的具體需求進行適當的修改和定制。

---

如有問題或建議，歡迎提出 Issue 或 Pull Request。

# 美甲網站部署指南

## 部署到 Netlify

### 方法一：通過 Git 部署（推薦）

1. **將代碼推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **在 Netlify 上部署**
   - 訪問 [netlify.com](https://netlify.com)
   - 點擊 "New site from Git"
   - 選擇 GitHub 並授權
   - 選擇您的倉庫
   - 構建設置：
     - Build command: `npm run build`
     - Publish directory: `out`
   - 點擊 "Deploy site"

### 方法二：直接上傳

1. **構建項目**
   ```bash
   npm run build
   ```

2. **上傳到 Netlify**
   - 訪問 [netlify.com](https://netlify.com)
   - 點擊 "New site from Git" → "Deploy manually"
   - 將 `out` 文件夾拖拽到上傳區域
   - 等待部署完成

### 構建命令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 構建生產版本
npm run build

# 本地測試生產版本
npx serve out
```

### 重要配置

- `next.config.js`: 配置靜態導出
- `netlify.toml`: Netlify 部署配置
- 構建輸出目錄: `out/`

### 自定義域名

部署完成後，您可以在 Netlify 設置中添加自定義域名。

### 環境變量

如果需要環境變量，請在 Netlify 的環境設置中添加。

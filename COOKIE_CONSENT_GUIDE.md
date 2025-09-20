# Cookie 同意橫幅實作指南

## 🍪 功能概述

已為您的網站實作完整的 Cookie 同意解決方案，包括：

- ✅ 美觀的 Cookie 同意橫幅
- ✅ Google Analytics 同意模式整合
- ✅ 用戶偏好記憶功能
- ✅ Cookie 設定管理頁面
- ✅ 隱私權政策頁面
- ✅ GDPR 合規支援

## 📁 新增的檔案

### 組件檔案
- `components/ui/CookieConsent.js` - 主要的 Cookie 同意橫幅
- `components/ui/CookieSettings.js` - Cookie 設定管理面板

### 頁面檔案
- `pages/privacy-policy.js` - 隱私權政策頁面
- `pages/cookie-settings.js` - Cookie 設定頁面

### 工具檔案
- `utils/cookieConsent.js` - Cookie 同意管理函數

## 🎨 橫幅特色

### 設計特點
- **延遲顯示**：頁面載入 2 秒後才顯示，避免干擾首次體驗
- **美觀動畫**：使用 Framer Motion 提供流暢的進入/退出動畫
- **響應式設計**：在桌面和行動裝置上都有良好的顯示效果
- **品牌一致性**：使用您網站的主色調 (#B8956A)

### 功能特點
- **記憶選擇**：使用 localStorage 記住用戶選擇
- **同意模式**：整合 Google Analytics 同意模式
- **隱私連結**：直接連結到隱私權政策頁面
- **雙選項**：提供「接受」和「拒絕」兩個選項

## 🔧 自訂設定

### 修改顯示時機

在 `components/ui/CookieConsent.js` 中修改延遲時間：

```javascript
// 目前是 2 秒，您可以調整這個數值
setTimeout(() => {
  setShowBanner(true);
  setIsVisible(true);
}, 2000); // 改為您想要的毫秒數
```

### 修改文字內容

在 `components/ui/CookieConsent.js` 中找到文字區塊並修改：

```javascript
<h3 className="text-lg font-semibold text-gray-900 mb-2">
  🍪 Cookie 使用說明
</h3>
<p className="text-gray-600 text-sm leading-relaxed">
  // 在這裡修改說明文字
</p>
```

### 修改樣式

橫幅使用 Tailwind CSS，您可以修改 className 來調整樣式：

```javascript
// 主容器樣式
className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200"

// 按鈕樣式
className="px-6 py-2 bg-[#B8956A] text-white rounded-lg hover:bg-[#A08660]"
```

## 📊 追蹤同意狀態

### 檢查同意狀態

```javascript
import { getCookieConsent } from '../utils/cookieConsent';

const consent = getCookieConsent();
// 返回值：
// true = 用戶已同意
// false = 用戶已拒絕  
// null = 用戶尚未選擇
```

### 手動設置同意

```javascript
import { setCookieConsent } from '../utils/cookieConsent';

// 設置為同意
setCookieConsent(true);

// 設置為拒絕
setCookieConsent(false);
```

### 清除同意狀態（用於測試）

```javascript
import { clearCookieConsent } from '../utils/cookieConsent';

clearCookieConsent();
// 這會清除所有同意記錄，橫幅會重新顯示
```

## 🔗 頁面連結

### 隱私權政策
- URL: `/privacy-policy`
- 包含完整的隱私權說明
- 需要更新聯絡資訊

### Cookie 設定
- URL: `/cookie-settings`  
- 允許用戶隨時修改 Cookie 偏好
- 提供詳細的 Cookie 類型說明

## 🌍 合規性

### GDPR 合規
- ✅ 明確的同意機制
- ✅ 拒絕選項
- ✅ 詳細的資料使用說明
- ✅ 撤回同意的能力

### 最佳實踐
- ✅ 預設拒絕追蹤
- ✅ 清楚的語言說明
- ✅ 易於存取的設定
- ✅ 透明的資料處理

## 🧪 測試建議

### 功能測試
1. 清除瀏覽器資料
2. 重新載入網站
3. 確認橫幅在 2 秒後顯示
4. 測試「接受」和「拒絕」按鈕
5. 確認選擇被正確記住

### 追蹤測試
1. 開啟 Chrome 開發者工具
2. 前往 Console 標籤
3. 查看 Google Analytics 相關日誌
4. 確認只在同意後才開始追蹤

### 響應式測試
1. 在不同螢幕尺寸下測試
2. 確認橫幅在行動裝置上正常顯示
3. 測試按鈕的可點擊性

## 📝 待辦事項

### 必須完成
- [ ] 更新隱私權政策中的聯絡資訊
- [ ] 設置 GA4 測量 ID
- [ ] 測試所有功能

### 可選改進
- [ ] 添加更多 Cookie 類型（廣告、功能性等）
- [ ] 實作 Cookie 掃描器
- [ ] 添加多語言支援
- [ ] 整合其他分析工具

## 🆘 常見問題

### Q: 橫幅不顯示？
A: 檢查是否已有同意記錄，使用 `clearCookieConsent()` 清除測試

### Q: GA4 沒有追蹤？
A: 確認已設置 `NEXT_PUBLIC_GA_ID` 環境變數

### Q: 樣式不正確？
A: 確認 Tailwind CSS 正常載入，檢查 className 是否正確

### Q: 如何修改文字？
A: 編輯 `components/ui/CookieConsent.js` 中的文字內容

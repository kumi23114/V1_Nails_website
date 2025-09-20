# Google Analytics 4 (GA4) 設置指南

## 🎯 已完成的設置

✅ 安裝了 `@next/third-parties` 套件
✅ 在 `_app.js` 中整合了 GA4
✅ 創建了環境變數檔案
✅ 創建了追蹤函數工具
✅ 實作了 Cookie 同意橫幅
✅ 整合了 Google Analytics 同意模式
✅ 創建了隱私權政策頁面

## 📋 接下來需要做的步驟

### 1. 獲取 GA4 測量 ID

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 登入您的 Google 帳戶
3. 創建新的 GA4 屬性（如果還沒有的話）
4. 在「管理」→「資料串流」中找到您的測量 ID
5. 測量 ID 格式為：`G-XXXXXXXXXX`

### 2. 設置環境變數

1. 打開 `.env.local` 檔案
2. 將 `G-XXXXXXXXXX` 替換為您的實際測量 ID：
   ```
   NEXT_PUBLIC_GA_ID=G-您的實際測量ID
   ```

### 3. 重新啟動開發伺服器

```bash
npm run dev
```

## 🔧 如何使用追蹤功能

### 基本事件追蹤

```javascript
import { trackEvent, trackBooking, trackContact, trackSocialClick } from '../utils/analytics';

// 追蹤預約按鈕點擊
const handleBookingClick = () => {
  trackBooking('美甲服務', 'online');
  // 您的預約邏輯...
};

// 追蹤聯絡按鈕點擊
const handleContactClick = () => {
  trackContact('phone');
  // 您的聯絡邏輯...
};

// 追蹤社群媒體點擊
const handleSocialClick = (platform) => {
  trackSocialClick(platform);
  // 您的社群媒體邏輯...
};
```

### 自定義事件追蹤

```javascript
import { trackEvent } from '../utils/analytics';

// 追蹤服務頁面瀏覽
trackEvent('view_service', 'engagement', '美甲服務');

// 追蹤價格查看
trackEvent('view_pricing', 'engagement', '價目表');

// 追蹤圖片庫瀏覽
trackEvent('view_gallery', 'engagement', '作品集');
```

## 📊 建議追蹤的事件

### 對美甲網站特別有用的事件：

1. **預約相關**
   - 預約按鈕點擊
   - 預約表單提交
   - 預約完成

2. **服務瀏覽**
   - 服務頁面瀏覽
   - 價格表查看
   - 作品集瀏覽

3. **聯絡互動**
   - 電話號碼點擊
   - 聯絡表單提交
   - 地址/地圖點擊

4. **社群媒體**
   - Instagram 點擊
   - Facebook 點擊
   - LINE 點擊

## 🔍 驗證設置

### 1. 使用 Google Analytics Debugger

1. 安裝 [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome 擴充功能
2. 開啟您的網站
3. 打開 Chrome 開發者工具的 Console 標籤
4. 查看是否有 GA4 相關的日誌

### 2. 使用 GA4 即時報表

1. 前往 Google Analytics
2. 選擇「報表」→「即時」
3. 瀏覽您的網站，查看是否有即時數據

## 🚀 進階設置（可選）

### 電子商務追蹤

如果您有線上付款功能，可以使用：

```javascript
import { trackConversion } from '../utils/analytics';

// 追蹤預約付款完成
trackConversion('booking_123', 1500, 'TWD');
```

### 自定義維度

您可以在 GA4 中設置自定義維度來追蹤：
- 服務類型
- 客戶來源
- 預約時段偏好

## 🍪 Cookie 同意功能

### 已實作的功能：

1. **Cookie 同意橫幅**：美觀的彈出式橫幅，支援接受/拒絕選項
2. **同意模式**：整合 Google Analytics 同意模式，只在用戶同意後追蹤
3. **本地儲存**：記住用戶的選擇，避免重複顯示
4. **隱私權政策**：完整的隱私權政策頁面

### Cookie 同意工具函數：

```javascript
import { getCookieConsent, setCookieConsent, clearCookieConsent } from '../utils/cookieConsent';

// 檢查同意狀態
const consent = getCookieConsent(); // true/false/null

// 手動設置同意（如果需要）
setCookieConsent(true); // 同意
setCookieConsent(false); // 拒絕

// 清除同意狀態（用於測試）
clearCookieConsent();
```

### 自訂 Cookie 橫幅：

您可以修改 `components/ui/CookieConsent.js` 來：
- 調整顯示時機（目前是 2 秒後顯示）
- 修改文字內容和樣式
- 添加更多選項（如「僅必要 Cookie」）

## ⚠️ 注意事項

1. **隱私權政策**：已創建基本的隱私權政策，請根據實際情況調整
2. **GDPR 合規**：Cookie 同意橫幅已實作，符合基本合規要求
3. **測試環境**：建議為測試環境使用不同的 GA4 屬性
4. **聯絡資訊**：請更新隱私權政策中的聯絡資訊

## 🔗 有用的連結

- [Google Analytics 4 官方文件](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Third Parties 文件](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [GA4 事件參考](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)

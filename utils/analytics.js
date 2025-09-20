// Google Analytics 4 追蹤函數

/**
 * 追蹤自定義事件
 * @param {string} action - 事件動作
 * @param {string} category - 事件類別
 * @param {string} label - 事件標籤（可選）
 * @param {number} value - 事件值（可選）
 */
export const trackEvent = (action, category, label = null, value = null) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData = {
      event_category: category,
      event_label: label,
      value: value,
    };

    // 移除 null 值
    Object.keys(eventData).forEach(key => {
      if (eventData[key] === null) {
        delete eventData[key];
      }
    });

    window.gtag('event', action, eventData);
  }
};

/**
 * 追蹤頁面瀏覽
 * @param {string} url - 頁面 URL
 * @param {string} title - 頁面標題
 */
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_location: url,
      page_title: title,
    });
  }
};

/**
 * 追蹤轉換事件（例如：預約完成）
 * @param {string} transactionId - 交易 ID
 * @param {number} value - 轉換價值
 * @param {string} currency - 貨幣代碼（預設：TWD）
 */
export const trackConversion = (transactionId, value, currency = 'TWD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    });
  }
};

/**
 * 追蹤預約事件
 * @param {string} service - 服務類型
 * @param {string} method - 預約方式
 */
export const trackBooking = (service, method = 'online') => {
  trackEvent('booking_initiated', 'engagement', `${service}_${method}`);
};

/**
 * 追蹤聯絡事件
 * @param {string} method - 聯絡方式（phone, email, form 等）
 */
export const trackContact = (method) => {
  trackEvent('contact', 'engagement', method);
};

/**
 * 追蹤社群媒體點擊
 * @param {string} platform - 社群平台名稱
 */
export const trackSocialClick = (platform) => {
  trackEvent('social_click', 'engagement', platform);
};

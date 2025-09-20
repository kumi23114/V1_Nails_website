// Cookie 同意管理工具

/**
 * 檢查用戶是否已同意 Cookie
 * @returns {boolean|null} true=已同意, false=已拒絕, null=尚未選擇
 */
export const getCookieConsent = () => {
  if (typeof window === 'undefined') return null;
  
  const consent = localStorage.getItem('cookie-consent');
  if (consent === 'accepted') return true;
  if (consent === 'declined') return false;
  return null;
};

/**
 * 設置 Cookie 同意狀態
 * @param {boolean} accepted - 是否同意
 */
export const setCookieConsent = (accepted) => {
  if (typeof window === 'undefined') return;
  
  const status = accepted ? 'accepted' : 'declined';
  localStorage.setItem('cookie-consent', status);
  localStorage.setItem('cookie-consent-date', new Date().toISOString());
  
  // 更新 Google Analytics 同意狀態
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: accepted ? 'granted' : 'denied'
    });
  }
};

/**
 * 清除 Cookie 同意狀態（用於測試或重置）
 */
export const clearCookieConsent = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('cookie-consent');
  localStorage.removeItem('cookie-consent-date');
};

/**
 * 獲取同意日期
 * @returns {Date|null} 同意的日期
 */
export const getConsentDate = () => {
  if (typeof window === 'undefined') return null;
  
  const dateString = localStorage.getItem('cookie-consent-date');
  return dateString ? new Date(dateString) : null;
};

/**
 * 檢查同意是否已過期（建議每年重新確認）
 * @param {number} monthsValid - 同意有效月數（預設12個月）
 * @returns {boolean} 是否已過期
 */
export const isConsentExpired = (monthsValid = 12) => {
  const consentDate = getConsentDate();
  if (!consentDate) return true;
  
  const expiryDate = new Date(consentDate);
  expiryDate.setMonth(expiryDate.getMonth() + monthsValid);
  
  return new Date() > expiryDate;
};

/**
 * 初始化 Google Analytics 同意模式
 */
export const initializeGAConsent = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // 設置預設同意狀態為拒絕
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    wait_for_update: 500
  });
  
  // 檢查現有同意狀態
  const consent = getCookieConsent();
  if (consent === true) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    });
  }
};

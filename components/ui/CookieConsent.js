import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 檢查是否已經有同意記錄
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // 延遲顯示橫幅，避免影響首次載入體驗
      const timer = setTimeout(() => {
        setShowBanner(true);
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // 儲存同意狀態
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // 啟用 Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    
    // 隱藏橫幅
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const handleDecline = () => {
    // 儲存拒絕狀態
    localStorage.setItem('cookie-consent', 'declined');
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // 隱藏橫幅
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            style={{ backdropFilter: 'blur(2px)' }}
          />
          
          {/* Cookie 同意橫幅 */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      🍪 Cookie 使用說明
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      我們使用 Cookie 和類似技術來改善您的瀏覽體驗、分析網站流量，並提供個人化內容。
                      這些資料幫助我們了解訪客如何使用我們的網站，讓我們能夠持續改善服務品質。
                      您可以選擇接受或拒絕非必要的 Cookie。
                    </p>
                    <a 
                      href="/privacy-policy" 
                      className="text-[#B8956A] hover:text-[#A08660] text-sm underline mt-2 inline-block"
                    >
                      了解更多隱私權政策
                    </a>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:ml-6">
                    <button
                      onClick={handleDecline}
                      className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
                    >
                      拒絕
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2 bg-[#B8956A] text-white rounded-lg hover:bg-[#A08660] transition-colors duration-200 text-sm font-medium shadow-md"
                    >
                      接受所有 Cookie
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

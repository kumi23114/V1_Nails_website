import { useState, useEffect } from 'react';
import { getCookieConsent, setCookieConsent } from '../../utils/cookieConsent';

const CookieSettings = ({ isOpen, onClose }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    setAnalyticsEnabled(consent === true);
  }, []);

  const handleSave = () => {
    setCookieConsent(analyticsEnabled);
    onClose();
    
    // 顯示儲存成功訊息
    if (typeof window !== 'undefined') {
      alert('Cookie 設定已儲存！');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* 設定面板 */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Cookie 設定</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            {/* 必要 Cookie */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    必要 Cookie
                  </h3>
                  <p className="text-gray-600 text-sm">
                    這些 Cookie 對網站正常運作是必需的，無法停用。它們通常只在您進行操作時設定，
                    例如設定隱私偏好、登入或填寫表單。
                  </p>
                </div>
                <div className="ml-4">
                  <div className="bg-gray-100 text-gray-500 px-3 py-1 rounded text-sm">
                    總是啟用
                  </div>
                </div>
              </div>
            </div>

            {/* 分析 Cookie */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    分析 Cookie
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    這些 Cookie 幫助我們了解訪客如何與網站互動，讓我們能夠測量和改善網站效能。
                    所有資訊都是匿名收集的。
                  </p>
                  <div className="text-xs text-gray-500">
                    <strong>使用的服務：</strong> Google Analytics
                  </div>
                </div>
                <div className="ml-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B8956A]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B8956A]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* 資訊說明 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    關於 Cookie
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Cookie 是儲存在您裝置上的小型文字檔案，用於改善您的瀏覽體驗。
                      您可以隨時在此頁面修改您的偏好設定。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 按鈕 */}
          <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#B8956A] text-white rounded-lg hover:bg-[#A08660] transition-colors"
            >
              儲存設定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;

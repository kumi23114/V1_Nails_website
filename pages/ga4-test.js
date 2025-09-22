import { useState } from 'react';
import { trackEvent, trackBooking, trackContact, trackSocialClick } from '../utils/analytics';

export default function GA4Test() {
  const [events, setEvents] = useState([]);

  const addEvent = (eventName, details) => {
    const timestamp = new Date().toLocaleTimeString();
    setEvents(prev => [...prev, { timestamp, eventName, details }]);
  };

  const testBooking = () => {
    trackBooking('美甲服務', 'test_page');
    addEvent('trackBooking', '美甲服務, test_page');
  };

  const testContact = () => {
    trackContact('phone');
    addEvent('trackContact', 'phone');
  };

  const testSocial = () => {
    trackSocialClick('instagram');
    addEvent('trackSocialClick', 'instagram');
  };

  const testCustomEvent = () => {
    trackEvent('test_event', 'testing', 'ga4_test_page', 1);
    addEvent('trackEvent', 'test_event, testing, ga4_test_page, 1');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">GA4 測試頁面</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">GA4 設定資訊</h2>
          <div className="space-y-2 text-sm">
            <p><strong>GA4 測量 ID:</strong> {process.env.NEXT_PUBLIC_GA_ID}</p>
            <p><strong>GTM ID:</strong> {process.env.NEXT_PUBLIC_GTM_ID}</p>
            <p><strong>狀態:</strong> 
              <span className={`ml-2 px-2 py-1 rounded text-xs ${
                typeof window !== 'undefined' && window.gtag 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {typeof window !== 'undefined' && window.gtag ? '已載入' : '未載入'}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">測試 GA4 事件</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={testBooking}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              測試預約事件
            </button>
            <button
              onClick={testContact}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
            >
              測試聯絡事件
            </button>
            <button
              onClick={testSocial}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors"
            >
              測試社群媒體事件
            </button>
            <button
              onClick={testCustomEvent}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
            >
              測試自定義事件
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">事件記錄</h2>
          {events.length === 0 ? (
            <p className="text-gray-500">尚無事件記錄，請點擊上方按鈕測試</p>
          ) : (
            <div className="space-y-2">
              {events.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="text-sm text-gray-500">{event.timestamp}</div>
                  <div className="font-medium">{event.eventName}</div>
                  <div className="text-sm text-gray-600">{event.details}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition-colors"
          >
            返回首頁
          </a>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-semibold text-yellow-800 mb-2">如何驗證 GA4 是否正常工作：</h3>
          <ol className="list-decimal list-inside text-sm text-yellow-700 space-y-1">
            <li>打開 Chrome 開發者工具 (F12)</li>
            <li>切換到 "Network" 標籤</li>
            <li>過濾 "google-analytics" 或 "gtag"</li>
            <li>點擊上方測試按鈕</li>
            <li>查看是否有請求發送到 Google Analytics</li>
            <li>或前往 GA4 即時報表查看數據</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

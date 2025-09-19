import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function BookingWidget() {
  const widgetContainerRef = useRef(null);
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 重置載入狀態
    setIsLoading(true);

    // 清理之前的 widget 實例
    const existingWidget = document.getElementById('sbw_trlbfj');
    if (existingWidget) {
      existingWidget.innerHTML = '';
    }

    // 檢查是否已經載入過 script
    const existingScript = document.querySelector('script[src*="widget.simplybook.asia"]');
    
    const initWidget = () => {
      if (window.SimplybookWidget) {
        new window.SimplybookWidget({
          "widget_type": "iframe",
          "url": "https://zeronail0228.simplybook.asia",
          "theme": "default",
          "theme_settings": {
            "timeline_hide_unavailable": "1",
            "hide_past_days": "0",
            "timeline_show_end_time": "0",
            "timeline_modern_display": "as_slots",
            "sb_base_color": "#B8956A", // 使用網站主色調
            "display_item_mode": "block",
            "booking_nav_bg_color": "#B8956A",
            "body_bg_color": "#f7f7f7",
            "sb_review_image": "",
            "dark_font_color": "#333333",
            "light_font_color": "#ffffff",
            "btn_color_1": "#9D7F4F", // 使用網站次要色調
            "sb_company_label_color": "#ffffff",
            "hide_img_mode": "1",
            "show_sidebar": "1",
            "sb_busy": "#dad2ce",
            "sb_available": "#d6ebff"
          },
          "timeline": "modern",
          "datepicker": "top_calendar",
          "is_rtl": false,
          "app_config": {
            "clear_session": 0,
            "allow_switch_to_ada": 0,
            "predefined": []
          },
          "container_id": "sbw_trlbfj"
        });

        // Widget 初始化後，監聽 iframe 載入完成
        const checkWidgetLoaded = () => {
          const iframe = document.querySelector('#sbw_trlbfj iframe');
          if (iframe) {
            // iframe 存在，等待其載入完成
            iframe.onload = () => {
              // 額外等待 1.5 秒確保內容完全載入
              setTimeout(() => {
                setIsLoading(false);
              }, 1500);
            };

            // 如果 iframe 已經載入完成（快取情況）
            if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
              setTimeout(() => {
                setIsLoading(false);
              }, 1500);
            }
          } else {
            // iframe 還沒出現，繼續檢查
            setTimeout(checkWidgetLoaded, 500);
          }
        };

        // 開始檢查 widget 載入狀態
        setTimeout(checkWidgetLoaded, 1000);
      }
    };

    if (existingScript) {
      // Script 已存在，直接初始化
      initWidget();
    } else {
      // 載入新的 script
      const script = document.createElement('script');
      script.async = true;
      script.src = "//widget.simplybook.asia/v2/widget/widget.js";
      script.onload = initWidget;
      script.onerror = () => {
        console.error('Failed to load SimplyBook widget script');
      };
      document.head.appendChild(script);
    }

    // 清理函數
    return () => {
      const container = document.getElementById('sbw_trlbfj');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Widget 容器 */}
      <div 
        id="sbw_trlbfj" 
        ref={widgetContainerRef}
        className="w-full min-h-[600px] bg-white rounded-[20px] shadow-lg overflow-hidden"
        style={{
          // 確保 widget 有足夠的空間
          minHeight: '600px'
        }}
      />
      
      {/* 載入提示 - 只在載入時顯示 */}
      {isLoading && (
        <div className="text-center mt-4">
          <div className="flex items-center justify-center space-x-2">
            {/* 載入動畫 */}
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#B8956A]"></div>
            <p className={`text-sm text-gray-600 ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
              {language === 'zh'
                ? '預約系統載入中，請稍候...'
                : 'Loading booking system, please wait...'
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

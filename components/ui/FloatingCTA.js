import { useState, useEffect } from "react";
import { ChatBubbleLeftRightIcon, XMarkIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../../contexts/LanguageContext";
import { site } from "../../data/content";
import Button from "./Button"; // 引入 Button 元件

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { language } = useLanguage();
  const currentContent = site[language];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] space-y-3 md:bottom-6 md:right-6">
      {/* 回到頂端按鈕 */}
      {showScrollTop && (
        <Button
          as="button"
          onClick={scrollToTop}
          variant="secondary" // 使用 Button.js 中定義的 variant
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110" // 保留按鈕形狀和動畫樣式
          aria-label={language === 'zh' ? '回到頂端' : 'Back to top'}
        >
          <ArrowUpIcon className="w-6 h-6" />
        </Button>
      )}

      {/* 主按鈕 */}
      <Button
        as="button"
        onClick={() => setIsExpanded(!isExpanded)}
        variant="secondary" // 使用 Button.js 中定義的 variant
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110" // 保留按鈕形狀和動畫樣式
        aria-label={language === 'zh' ? '聯絡我們' : 'Contact us'}
      >
        {isExpanded ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        )}
      </Button>

      {/* 展開的按鈕 */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 min-w-[200px] z-[9998] md:bottom-20">
          {/* Line 按鈕 */}
          <Button
            as="a"
            href={currentContent.services.external.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="line" // 使用 Button.js 中定義的 variant
            className="w-full justify-start px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105" // 保留按鈕形狀和動畫樣式
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </div>
            <span className="font-medium">{currentContent.services.external.lineLabel}</span>
          </Button>

          {/* Instagram 按鈕 */}
          <Button
            as="a"
            href={currentContent.services.external.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="instagram" // 使用 Button.js 中定義的 variant
            className="w-full justify-start px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105" // 保留按鈕形狀和動畫樣式
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span className="font-medium">{currentContent.services.external.instagramLabel}</span>
          </Button>

          {/* 預約按鈕 */}
          <Button
            as="button"
            variant="secondary" // 使用 Button.js 中定義的 variant
            className="w-full justify-start px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105" // 保留按鈕形狀和動畫樣式
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-medium">{currentContent.nav.bookNow}</span>
          </Button>
        </div>
      )}
    </div>
  );
}

import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentContent = site[language];
  
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* 營業時間 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-display">
              {language === 'zh' ? '營業時間' : 'Business Hours'}
            </h3>
            <p className="text-gray-600 mb-2 font-body">{currentContent.location.hours}</p>
            <p className="text-sm text-gray-500 font-body">
              {language === 'zh' ? '採預約制，請提前預約' : 'By appointment only, please book in advance'}
            </p>
          </div>

          {/* 版權資訊 */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500 font-body">
              © {new Date().getFullYear()} {currentContent.brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

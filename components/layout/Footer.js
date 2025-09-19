import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  const currentContent = site[language];
  
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* 版權資訊 */}
          <div className="pt-6">
            <p className="text-sm text-gray-500 font-body">
              © {new Date().getFullYear()} {currentContent.brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

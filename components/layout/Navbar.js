import { site } from "../../data/content";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  
  const currentContent = site[language];
  const navContent = currentContent.nav;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-sm sticky top-0 z-50 border-b border-serene-200" style={{background: 'linear-gradient(135deg, #4C657A 0%, #253A4A 50%, #142025 100%)'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 relative">
          {/* 左側導航 */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#portfolio"
              className="text-white hover:text-serene-200 transition-colors font-body"
            >
              {navContent.portfolio}
            </a>
            <a
              href="#services"
              className="text-white hover:text-serene-200 transition-colors font-body"
            >
              {navContent.services}
            </a>
          </div>

          {/* 中央品牌標誌 - 完全置中 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <img
              src="/images/ZERONAIL (1)LOGO.jpg"
              alt="ZERONAIL Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* 右側區域 - 包含桌面版導航和手機版漢堡選單 */}
          <div className="ml-auto flex items-center space-x-8">
            {/* 桌面版導航 */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#booking"
                className="text-white hover:text-serene-200 transition-colors font-body"
              >
                {navContent.booking}
              </a>
              <a
                href="#location"
                className="text-white hover:text-serene-200 transition-colors font-body"
              >
                {navContent.location}
              </a>
              
              {/* 語言切換按鈕 */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 text-sm border border-serene-300 rounded-md hover:bg-serene-100/10 transition-colors font-body text-white"
              >
                {language === 'zh' ? 'EN' : '中文'}
              </button>
              
              <a
                href={currentContent.location.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aurora-line text-white px-4 py-2 rounded-lg transition-all duration-300 font-body"
              >
                {navContent.bookNow}
              </a>
            </div>

            {/* 手機版漢堡選單按鈕 - 真正右上角 */}
            <div className="md:hidden flex items-center space-x-2">
              {/* 手機版語言切換按鈕 */}
              <button
                onClick={toggleLanguage}
                className="px-2 py-1 text-xs border border-serene-300 rounded-md hover:bg-serene-100/10 transition-colors font-body text-white"
              >
                {language === 'zh' ? 'EN' : '中文'}
              </button>
              
              <button
                onClick={toggleMenu}
                className={`toggle ${isMenuOpen ? 'on' : ''}`}
                id="toggle"
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* 手機版選單 */}
        <div className={`md:hidden menu ${isMenuOpen ? 'on' : ''}`} id="menu">
          <ul>
            <li>
              <a 
                href="#portfolio" 
                onClick={() => setIsMenuOpen(false)}
                className="menu-link font-body"
              >
                {navContent.portfolio}
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={() => setIsMenuOpen(false)}
                className="menu-link font-body"
              >
                {navContent.services}
              </a>
            </li>
            <li>
              <a 
                href="#booking" 
                onClick={() => setIsMenuOpen(false)}
                className="menu-link font-body"
              >
                {navContent.booking}
              </a>
            </li>
            <li>
              <a 
                href="#location" 
                onClick={() => setIsMenuOpen(false)}
                className="menu-link font-body"
              >
                {navContent.location}
              </a>
            </li>
            <li>
              <a
                href={currentContent.location.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="menu-link special font-body"
              >
                {navContent.bookNow}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 漢堡菜單樣式 */}
      <style jsx>{`
        /* 漢堡菜單按鈕樣式 */
        .toggle {
          display: block;
          width: 28px;
          height: 30px;
          margin: 0;
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
        }

        .toggle span:after,
        .toggle span:before {
          content: "";
          position: absolute;
          left: 0;
          top: -9px;
        }

        .toggle span:after {
          top: 9px;
        }

        .toggle span {
          position: relative;
          display: block;
        }

        .toggle span,
        .toggle span:after,
        .toggle span:before {
          width: 100%;
          height: 3px;
          background-color: #F7F7F7;
          transition: all 0.3s;
          backface-visibility: hidden;
          border-radius: 2px;
        }

        /* 激活狀態 */
        .toggle.on span {
          background-color: transparent;
        }

        .toggle.on span:before {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .toggle.on span:after {
          transform: rotate(-45deg) translate(7px, -8px);
        }

        /* 菜單外觀 - 使用深色背景 */
        .menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          color: white;
          width: 100%;
          padding: 20px;
          margin: 0;
          font-family: inherit;
          text-align: center;
          border-radius: 0 0 8px 8px;
          background: linear-gradient(135deg, #4C657A 0%, #253A4A 50%, #142025 100%);
          box-shadow: 0 4px 12px rgba(140, 157, 175, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          transform: translateY(-10px);
          z-index: 1000;
        }

        /* 當菜單打開時的狀態 */
        .menu.on {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateY(0) !important;
        }

        .menu:after {
          position: absolute;
          top: -8px;
          right: 30px;
          content: "";
          display: block;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 8px solid #4C657A;
        }

        .menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          margin: 0;
          padding: 0;
        }

        .menu-link {
          display: block;
          padding: 12px 16px;
          color: white;
          text-decoration: none;
          transition: all 0.2s;
          border-radius: 6px;
          margin: 4px 0;
          font-weight: 500;
        }

        .menu-link:hover,
        .menu-link:focus {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateX(4px);
        }

        .menu-link.special {
          background: #F7F7F7;
          color: #142025;
          font-weight: 600;
        }

        .menu-link.special:hover {
          background: #E3E6EA;
          transform: translateX(4px);
        }
      `}</style>
    </nav>
  );
}

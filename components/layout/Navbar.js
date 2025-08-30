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
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 品牌標誌 */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900 font-display">
              {currentContent.brand.name}
            </h1>
            <span className="ml-2 text-sm text-gray-500 hidden sm:block font-body">
              {currentContent.brand.tagline}
            </span>
          </div>

          {/* 桌面版導航 */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-gray-900 transition-colors font-body"
            >
              {navContent.portfolio}
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors font-body"
            >
              {navContent.services}
            </a>
            <a
              href="#booking"
              className="text-gray-600 hover:text-gray-900 transition-colors font-body"
            >
              {navContent.booking}
            </a>
            <a
              href="#location"
              className="text-gray-600 hover:text-gray-900 transition-colors font-body"
            >
              {navContent.location}
            </a>
            
            {/* 語言切換按鈕 */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-body"
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

          {/* 手機版漢堡菜單按鈕 */}
          <div className="md:hidden flex items-center space-x-2">
            {/* 手機版語言切換按鈕 */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-body"
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
          background-color: #6b7280;
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

        /* 菜單外觀 - 棕色背景 */
        .menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          color: #6D3B07;
          width: 100%;
          padding: 20px;
          margin: 0;
          font-family: inherit;
          text-align: center;
          border-radius: 0 0 8px 8px;
          background: #E0C3A9;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
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
          border-bottom: 8px solid #E0C3A9;
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
          color: #6D3B07;
          text-decoration: none;
          transition: all 0.2s;
          border-radius: 6px;
          margin: 4px 0;
          font-weight: 500;
        }

        .menu-link:hover,
        .menu-link:focus {
          background: #D4B89A;
          color: #6D3B07;
          transform: translateX(4px);
        }

        .menu-link.special {
          background: #6D3B07;
          color: white;
          font-weight: 600;
        }

        .menu-link.special:hover {
          background: #5A2F05;
          transform: translateX(4px);
        }
      `}</style>
    </nav>
  );
}

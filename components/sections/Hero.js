// 平滑滾動函數
const smoothScrollTo = (elementId, offset = -56, duration = 400) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  ScrollTriggerContainer,
  AnimatedSubtitle,
  AnimatedContent
} from "../ui/UnifiedScrollAnimation";

export default function Hero() {
  const { language } = useLanguage();
  const { hero } = site[language];

  // Hero圖片陣列
  const heroImages = [
    '/images/hero1.png',
    '/images/hero2.png',
    '/images/hero3.png',
    '/images/hero4.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 自動切換圖片
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % heroImages.length
        );
        setIsTransitioning(false);
      }, 800);
    }, 4000); // 每4秒切換一次

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-gradient-to-br from-[#F5F3F1] to-[#E8E6E3] overflow-hidden"
    >
      <div className="container-responsive h-full flex items-center justify-center py-2 md:py-6 lg:py-8">
        {/* 左右分欄區域 - 70/30 比例 */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* 左側圖片容器 - 70% 寬度 */}
          <div className="relative order-2 lg:order-1 w-full lg:w-[70%]">
            <div className="relative w-full">
              {/* 橫向圖片容器 - 16:9 比例 */}
              <div className="relative aspect-[16/9] rounded-[20px] overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={image}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      index === currentImageIndex && !isTransitioning
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image}
                      alt={language === 'zh' ?
                        `Zero Nails 美甲沙龍環境展示 ${index + 1} - 專業美甲服務空間` :
                        `Zero Nails salon environment showcase ${index + 1} - Professional nail service space`
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* 圖片指示器 */}
              <div className="flex justify-center mt-4 gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 800);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-400 ease-out hover:scale-120 ${
                      index === currentImageIndex
                        ? 'bg-[#B8956A] scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`切換到圖片 ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 右側直式文字區域 - 30% 寬度 */}
          <div className="relative order-1 lg:order-2 w-full lg:w-[30%] flex justify-center lg:justify-start">
            <ScrollTriggerContainer
              className="relative z-10 h-full flex flex-col lg:flex-row lg:items-start lg:gap-6"
              staggerDelay={0.3}
              animationType="fadeUp"
              enableParallax={false}
            >
              {/* 三段直式副標題 */}
              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 w-full">
                <AnimatedSubtitle
                  customDelay={0.2}
                  className={`text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose tracking-wide text-center lg:text-left text-gray-600 font-medium ${
                    language === 'zh' ? 'font-chinese break-keep' : 'font-display break-words'
                  }`}
                  lang={language}
                >
                  我們相信美是一種能量，
                </AnimatedSubtitle>

                <AnimatedSubtitle
                  customDelay={0.3}
                  className={`text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose tracking-wide text-center lg:text-left text-gray-600 font-medium ${
                    language === 'zh' ? 'font-chinese break-keep' : 'font-display break-words'
                  }`}
                  lang={language}
                >
                  在這片溫柔的空間裡，
                </AnimatedSubtitle>

                <AnimatedSubtitle
                  customDelay={0.4}
                  className={`text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose tracking-wide text-center lg:text-left text-gray-600 font-medium ${
                    language === 'zh' ? 'font-chinese break-keep' : 'font-display break-words'
                  }`}
                  lang={language}
                >
                  每一刻的創作都是靈魂對話與自我療癒的延伸。
                </AnimatedSubtitle>

                {/* 按鈕區域 - 移到副標題下方 */}
                <AnimatedContent customDelay={0.5}>
                  <div className="flex flex-col md:flex-row lg:flex-row gap-3 md:gap-4 w-full max-w-xs md:max-w-none mx-auto lg:mx-0 mt-6 md:mt-8 lg:mt-8 md:justify-center lg:justify-start">
                    <Button
                      as="button"
                      onClick={() => smoothScrollTo("booking")}
                      className="shadow-lg font-bold whitespace-nowrap min-w-[120px] md:min-w-auto w-full md:w-auto"
                    >
                      {hero.ctaPrimary}
                    </Button>
                    <Button
                      as="button"
                      onClick={() => smoothScrollTo("portfolio")}
                      variant="outline"
                      className="border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white whitespace-nowrap min-w-[120px] md:min-w-auto w-full md:w-auto"
                    >
                      {hero.ctaSecondary}
                    </Button>
                  </div>
                </AnimatedContent>
              </div>
            </ScrollTriggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}



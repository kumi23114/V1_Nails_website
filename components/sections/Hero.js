import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle,
  AnimatedContent
} from "../ui/UnifiedScrollAnimation";

export default function Hero() {
  const { language } = useLanguage();
  const { hero } = site[language];
  
  // 背景圖片陣列 - 更新為兩張新圖片
  const backgroundImages = [
    '/images/ZERONAIL (2).jpg',
    '/images/ZERONAIL (3).jpg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // 自動切換背景圖片
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
        setIsTransitioning(false);
      }, 800); // 0.8秒後切換圖片，配合CSS動畫時間
    }, 3000); // 每3秒切換一次，更符合用戶瀏覽習慣
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-warm-500"
    >
      {/* 背景圖片容器 */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 hero-background-transition ${
              index === currentImageIndex && !isTransitioning
                ? 'opacity-100 hero-background-fade-in'
                : 'opacity-0 hero-background-fade-out'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#8C9DAF' // 靜謐灰藍背景
            }}
          />
        ))}
      </div>
      
      {/* 背景遮罩層，使用新配色確保文字清晰可讀 */}
      <div className="absolute inset-0 bg-ocean-400/20"></div>
      
      {/* 漸層遮罩，使用新配色增加視覺層次 */}
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-400/30 via-ocean-400/15 to-transparent"></div>
      
      {/* 背景指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 800);
            }}
            className={`w-3 h-3 rounded-full hero-indicator ${
              index === currentImageIndex
                ? 'bg-ocean-400 scale-125'
                : 'bg-ocean-400/50 hover:bg-ocean-400/75'
            }`}
            aria-label={`切換到背景圖片 ${index + 1}`}
          />
        ))}
      </div>
      
      <ScrollTriggerContainer 
        className="relative container-responsive py-16 z-10"
        staggerDelay={0.3}
        animationType="fadeUp"
        enableParallax={true}
        parallaxSpeed={0.2}
      >
        <AnimatedTitle 
          customDelay={0}
          enableGlow={false}
          className="text-white font-bold text-3xl md:text-5xl text-center"
          style={{
            textShadow: `
              0 0 10px rgba(0, 0, 0, 1),
              0 0 20px rgba(0, 0, 0, 0.9),
              0 0 30px rgba(0, 0, 0, 0.8),
              2px 2px 4px rgba(0, 0, 0, 1),
              4px 4px 8px rgba(0, 0, 0, 0.9),
              6px 6px 12px rgba(0, 0, 0, 0.8)
            `
          }}
        >
          {hero.headline}
        </AnimatedTitle>
        
        <AnimatedSubtitle 
          customDelay={0.2}
          className="mt-4 text-white font-semibold max-w-prose text-lg md:text-xl text-center"
          style={{
            textShadow: `
              0 0 8px rgba(0, 0, 0, 1),
              0 0 16px rgba(0, 0, 0, 0.9),
              0 0 24px rgba(0, 0, 0, 0.8),
              1px 1px 3px rgba(0, 0, 0, 1),
              2px 2px 6px rgba(0, 0, 0, 0.9),
              3px 3px 9px rgba(0, 0, 0, 0.8)
            `
          }}
        >
          {hero.sub}
        </AnimatedSubtitle>
        
        <AnimatedContent customDelay={0.4}>
          <div className="mt-8 flex gap-3">
            <ScrollLink to="booking" smooth={true} offset={-56} duration={400}>
              <Button as="span" className="aurora-primary shadow-lg font-bold">
                {hero.ctaPrimary}
              </Button>
            </ScrollLink>
            <ScrollLink to="portfolio" smooth={true} offset={-56} duration={400}>
              <Button variant="outline" className="aurora-outline border-ocean-400 text-ocean-400 hover:bg-ocean-400 hover:text-white">
                {hero.ctaSecondary}
              </Button>
            </ScrollLink>
          </div>
        </AnimatedContent>
      </ScrollTriggerContainer>
    </section>
  );
}



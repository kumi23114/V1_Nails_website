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
  
  // 背景圖片陣列
  const backgroundImages = [
    '/images/nail.png',
    '/images/manicure.png',
    '/images/background (1).png',
    '/images/background (2).png',
    '/images/background (3).png'
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
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden"
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
              backgroundColor: '#FFCA99'
            }}
          />
        ))}
      </div>
      
      {/* 背景遮罩層，確保文字清晰可讀 */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* 漸層遮罩，增加視覺層次 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent"></div>
      
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
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
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
          enableGlow={true}
          className="text-white font-bold text-3xl md:text-5xl text-center"
        >
          {hero.headline}
        </AnimatedTitle>
        
        <AnimatedSubtitle 
          customDelay={0.2}
          className="mt-4 text-white font-semibold max-w-prose text-lg md:text-xl text-center"
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
              <Button variant="outline" className="aurora-outline border-white text-white hover:bg-white hover:text-gray-900">
                {hero.ctaSecondary}
              </Button>
            </ScrollLink>
          </div>
        </AnimatedContent>
      </ScrollTriggerContainer>
    </section>
  );
}



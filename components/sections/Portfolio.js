import PortfolioCarousel from "../ui/PortfolioCarousel";
import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle,
  AnimatedContent
} from "../ui/UnifiedScrollAnimation";

export default function Portfolio() {
  const { language } = useLanguage();
  const { portfolio } = site[language];
  
  return (
    <section id="portfolio" className="pt-4 pb-10 md:py-10 bg-gradient-to-br from-brown-50 to-brown-100 relative">
      {/* 黑色遮罩背景 */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <ScrollTriggerContainer 
        className="container mx-auto px-4 relative z-10"
        staggerDelay={0.25}
        animationType="fadeUp"
        enableParallax={true}
        parallaxSpeed={0.3}
      >
        <AnimatedTitle
          customDelay={0}
          enableGlow={true}
          className={`text-3xl font-bold text-[#9D7F4F] mb-4 text-center drop-shadow-lg ${language === 'zh' ? 'font-chinese' : 'font-display'}`}
        >
          {portfolio.title}
        </AnimatedTitle>

        <AnimatedSubtitle
          customDelay={0.1}
          className={`text-lg text-white mb-6 text-center font-medium drop-shadow-md ${language === 'zh' ? 'font-chinese' : 'font-body'}`}
        >
          {portfolio.subtitle}
        </AnimatedSubtitle>
        
        {/* 3D輪播特效 */}
        <AnimatedContent customDelay={0.2}>
          <PortfolioCarousel />
        </AnimatedContent>
      </ScrollTriggerContainer>
    </section>
  );
}

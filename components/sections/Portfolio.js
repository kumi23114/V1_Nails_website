import SectionHeader from "../ui/SectionHeader";
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
    <section id="portfolio" className="py-10 bg-gradient-to-br from-warm-400 to-serene-100 relative">
      {/* 靜謐灰藍遮罩背景 */}
      <div className="absolute inset-0 bg-serene-500 bg-opacity-20"></div>
      
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
          className="text-3xl font-bold text-ocean-400 mb-4 text-center drop-shadow-lg"
        >
          {portfolio.title}
        </AnimatedTitle>
        
        <AnimatedSubtitle 
          customDelay={0.1}
          className="text-lg text-ocean-600 mb-6 text-center font-medium drop-shadow-md"
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

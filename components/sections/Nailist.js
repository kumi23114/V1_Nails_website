import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle, 
  AnimatedContent,
  AnimatedCard
} from "../ui/UnifiedScrollAnimation";

export default function Nailist() {
  const { language } = useLanguage();
  const { nailist } = site[language];
  
  return (
    <section id="nailist" className="py-8">
      <ScrollTriggerContainer 
        className="container mx-auto px-4"
        staggerDelay={0.2}
        animationType="fadeUp"
        enableParallax={true}
        parallaxSpeed={0.2}
      >
        <div className="text-center mb-6">
          <AnimatedTitle 
            customDelay={0}
            enableGlow={true}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {nailist.title}
          </AnimatedTitle>
          
          <AnimatedSubtitle customDelay={0.1} className="text-lg font-medium text-gray-600">
            {language === 'zh' ? '認識為您打造美麗的專業美甲師' : 'Meet the professional nail artist who creates beauty for you'}
          </AnimatedSubtitle>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 美甲師照片 */}
            <AnimatedContent 
              customDelay={0.2}
              animationType="slideInLeft"
            >
              <div className="relative">
                <img
                  src={nailist.photo}
                  alt={`${language === 'zh' ? '美甲師' : 'Nail Artist'} ${nailist.name}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </AnimatedContent>

            {/* 美甲師資訊 */}
            <div className="space-y-6">
              <AnimatedContent customDelay={0.3}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">
                    {nailist.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-body">
                    {nailist.intro}
                  </p>
                </div>
              </AnimatedContent>

              {/* 專業認證 */}
              <AnimatedContent customDelay={0.4}>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 font-display">
                    {language === 'zh' ? '專業認證' : 'Professional Certifications'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {nailist.badges.map((badge, index) => (
                      <AnimatedCard 
                        key={index}
                        customDelay={0.5 + (index * 0.1)}
                        className="flex items-center bg-gray-50 px-4 py-3"
                        hoverEffect={false}
                      >
                        <svg className="w-5 h-5 text-button mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm font-body">{badge}</span>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              </AnimatedContent>

              {/* 服務理念 */}
              <AnimatedContent customDelay={0.6}>
                <div className="bg-button/10 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-button mb-3 font-display">
                    {language === 'zh' ? '服務理念' : 'Service Philosophy'}
                  </h4>
                  <p className="text-button/80 text-sm leading-relaxed font-body">
                    {language === 'zh' 
                      ? '堅持一對一的個人化服務，深入了解每位客人的需求和喜好，結合專業技術與美學設計，為您打造獨一無二的美甲作品。'
                      : 'We insist on one-on-one personalized service, deeply understand each client\'s needs and preferences, and combine professional skills with aesthetic design to create unique nail art for you.'
                    }
                  </p>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </ScrollTriggerContainer>
    </section>
  );
}

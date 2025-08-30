import { site } from "../../data/content";
import { useLanguage } from "../../contexts/LanguageContext";
import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle, 
  AnimatedCard, 
  AnimatedContent, 
  AnimatedGrid 
} from "../ui/UnifiedScrollAnimation";

export default function Services() {
  const { language } = useLanguage();
  const { services } = site[language];
  
  return (
    <section id="services" className="py-8 bg-gray-50 min-h-[50vh] md:min-h-auto">
      <ScrollTriggerContainer 
        className="container mx-auto px-4"
        staggerDelay={0.2}
        animationType="fadeUp"
        enableParallax={false}
        viewportMargin="-20px"
      >
        {/* 標題區域 - 優先浮現 */}
        <AnimatedTitle 
          customDelay={0}
          enableGlow={true}
          className="text-3xl font-bold text-center text-gray-900"
        >
          {services.title}
        </AnimatedTitle>
        
        <AnimatedSubtitle customDelay={0.1} className="text-lg text-center font-medium text-gray-600">
          {services.subtitle}
        </AnimatedSubtitle>

        {/* 服務方案網格 - 交錯浮現 */}
        <AnimatedGrid 
          columns={5}
          staggerDelay={0.15}
          itemAnimationType="card"
          className="mb-16"
        >
          {services.plans.map((plan, index) => (
            <AnimatedCard 
              key={index} 
              customDelay={index * 0.1}
              hoverEffect={true}
              className="min-h-[200px] flex flex-col justify-center text-center"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                {plan.name}
              </h3>
              <div className="text-2xl font-bold text-button mb-3 font-body">
                NT$ {plan.price.toLocaleString()}
              </div>
              <p className="text-gray-600 text-sm font-body">{plan.desc}</p>
            </AnimatedCard>
          ))}
        </AnimatedGrid>

        {/* 服務說明區塊 - 延遲浮現 */}
        <AnimatedContent 
          customDelay={0.3}
          className="bg-white/90 rounded-lg p-6 md:p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center font-display">
            {language === 'zh' ? '服務說明' : 'Service Information'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左側 - 服務內容 */}
            <AnimatedContent customDelay={0.4}>
              <h4 className="font-semibold text-gray-900 mb-3 font-display">
                {language === 'zh' ? '服務內容' : 'Service Details'}
              </h4>
              <ul className="space-y-2 text-gray-600 font-body">
                {services.notes.map((note, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-button mr-2">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
            
            {/* 右側 - 預約須知 */}
            <AnimatedContent customDelay={0.5}>
              <h4 className="font-semibold text-gray-900 mb-3 font-display">
                {language === 'zh' ? '預約須知' : 'Booking Notice'}
              </h4>
              <ul className="space-y-2 text-gray-600 font-body">
                {[
                  language === 'zh' ? '請提前 24 小時預約' : 'Please book 24 hours in advance',
                  language === 'zh' ? '如需改期請提前告知' : 'Please notify us in advance for rescheduling',
                  language === 'zh' ? '一對一服務，確保品質' : 'One-on-one service for quality assurance',
                  language === 'zh' ? '提供專業美甲建議' : 'Professional nail care consultation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-button mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
          </div>
        </AnimatedContent>

        {/* 外部連結 - 最後浮現 */}
        <AnimatedContent 
          customDelay={0.6}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={services.external.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aurora-line px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow duration-300 inline-flex items-center gap-2"
            >
              <span>💬</span>
              {services.external.lineLabel}
            </a>
            <a
              href={services.external.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="aurora-instagram px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-shadow duration-300 inline-flex items-center gap-2"
            >
              <span>📸</span>
              {services.external.instagramLabel}
            </a>
          </div>
        </AnimatedContent>
      </ScrollTriggerContainer>
    </section>
  );
}

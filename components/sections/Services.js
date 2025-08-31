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
    <section id="services" className="py-16 min-h-screen relative overflow-hidden bg-warm-500">
      {/* 背景圖片 - 更新為 zero nails (5).png */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/zero nails (5).png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* 背景遮罩層 - 減少遮罩強度，讓背景圖片更凸顯 */}
      <div className="absolute inset-0 bg-warm-500/30 z-0"></div>
      
      {/* 漸層遮罩 - 只在底部添加漸層，讓上方背景更清晰 */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-500/60 via-warm-500/20 to-transparent z-0"></div>
      <ScrollTriggerContainer 
        className="container mx-auto px-4 relative z-10"
        staggerDelay={0.1}
        animationType="fadeUp"
        enableParallax={false}
        viewportMargin="-50px"
      >
        {/* 標題區域 - 優先浮現 */}
        <AnimatedTitle 
          customDelay={0}
          enableGlow={true}
          className="text-3xl font-bold text-center text-ocean-400"
        >
          {services.title}
        </AnimatedTitle>
        
        <AnimatedSubtitle customDelay={0.1} className="text-lg text-center font-medium text-serene-700">
          {services.subtitle}
        </AnimatedSubtitle>

        {/* 服務方案網格 - 交錯浮現 */}
        <AnimatedGrid 
          columns={5}
          staggerDelay={0.1}
          itemAnimationType="card"
          className="mb-16"
        >
          {services.plans.map((plan, index) => (
            <AnimatedCard 
              key={index} 
              customDelay={index * 0.1}
              hoverEffect={true}
              animationType="card"
              className="min-h-[200px] flex flex-col justify-center text-center bg-white/70 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-white/30"
            >
              <h3 className="text-lg font-bold text-ocean-400 mb-2 font-display">
                {plan.name}
              </h3>
              <div className="text-2xl font-bold text-ocean-400 mb-3 font-body">
                NT$ {plan.price.toLocaleString()}
              </div>
              <p className="text-serene-700 text-sm font-body">{plan.desc}</p>
            </AnimatedCard>
          ))}
        </AnimatedGrid>

        {/* 服務說明區塊 - 延遲浮現 */}
        <AnimatedContent 
          customDelay={0.3}
          className="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg border border-white/30"
        >
          <h3 className="text-xl font-semibold text-ocean-400 mb-6 text-center font-display">
            {language === 'zh' ? '服務說明' : 'Service Information'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左側 - 服務內容 */}
            <AnimatedContent customDelay={0.4}>
              <h4 className="font-semibold text-ocean-400 mb-3 font-display">
                {language === 'zh' ? '服務內容' : 'Service Details'}
              </h4>
              <ul className="space-y-2 text-serene-700 font-body">
                {services.notes.map((note, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-ocean-400 mr-2">•</span>
                    {note}
                  </li>
                ))}
              </ul>
            </AnimatedContent>
            
            {/* 右側 - 預約須知 */}
            <AnimatedContent customDelay={0.5}>
              <h4 className="font-semibold text-ocean-400 mb-3 font-display">
                {language === 'zh' ? '預約須知' : 'Booking Notice'}
              </h4>
              <ul className="space-y-2 text-serene-700 font-body">
                {[
                  language === 'zh' ? '請提前 24 小時預約' : 'Please book 24 hours in advance',
                  language === 'zh' ? '如需改期請提前告知' : 'Please notify us in advance for rescheduling',
                  language === 'zh' ? '一對一服務，確保品質' : 'One-on-one service for quality assurance',
                  language === 'zh' ? '提供專業美甲建議' : 'Professional nail care consultation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-ocean-400 mr-2">•</span>
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

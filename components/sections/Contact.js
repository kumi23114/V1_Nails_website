import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import {
  ScrollTriggerContainer,
  AnimatedTitle,
  AnimatedSubtitle,
  AnimatedContent,
  AnimatedCard,
  AnimatedGrid
} from "../ui/UnifiedScrollAnimation";
import { useLanguage } from "../../contexts/LanguageContext";
import { site } from "../../data/content";

export default function Contact() {
  const { language } = useLanguage();
  const { location } = site[language];
  return (
    <section id="contact" className="container-responsive py-6">
      <ScrollTriggerContainer 
        className="max-w-4xl mx-auto"
        staggerDelay={0.2}
        animationType="fadeUp"
        enableParallax={true}
        parallaxSpeed={0.2}
      >
        <AnimatedTitle 
          customDelay={0}
          enableGlow={true}
          className="text-3xl font-bold text-center mb-4 text-gray-900"
        >
          聯絡我們
        </AnimatedTitle>
        
        <AnimatedSubtitle customDelay={0.1} className="text-lg text-center mb-6 font-medium text-gray-600">
          歡迎預約或諮詢美甲服務
        </AnimatedSubtitle>
        
        {/* 聯絡資訊 */}
        <AnimatedContent 
          customDelay={0.2}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h3 className={`text-2xl font-bold text-gray-800 mb-6 text-center ${language === 'zh' ? 'font-chinese' : 'font-display'}`}>聯絡資訊</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 地址 */}
            <AnimatedCard 
              customDelay={0.3}
              className="flex items-start space-x-4 bg-transparent shadow-none border-none p-0"
              hoverEffect={false}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B8956A] rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-semibold text-gray-800 mb-2 ${language === 'zh' ? 'font-chinese' : 'font-display'}`}>
                  {language === 'zh' ? '店家地址' : 'Address'}
                </h4>
                <p className={`text-gray-600 leading-relaxed ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
                  {location.address}
                </p>
              </div>
            </AnimatedCard>

            {/* 電話 */}
            <AnimatedCard 
              customDelay={0.4}
              className="flex items-start space-x-4 bg-transparent shadow-none border-none p-0"
              hoverEffect={false}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B8956A] rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-semibold text-gray-800 mb-2 ${language === 'zh' ? 'font-chinese' : 'font-display'}`}>
                  {language === 'zh' ? '預約電話' : 'Phone'}
                </h4>
                <p className={`text-gray-600 ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
                  <a href={`tel:+886-${location.phone?.replace(/\s/g, '')}`} className="hover:text-[#B8956A] transition-colors">
                    {location.phone}
                  </a>
                </p>
              </div>
            </AnimatedCard>

            {/* 營業時間 */}
            <AnimatedCard 
              customDelay={0.5}
              className="flex items-start space-x-4 bg-transparent shadow-none border-none p-0"
              hoverEffect={false}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B8956A] rounded-full flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-semibold text-gray-800 mb-2 ${language === 'zh' ? 'font-chinese' : 'font-display'}`}>
                  {language === 'zh' ? '營業時間' : 'Business Hours'}
                </h4>
                <div className={`text-gray-600 space-y-1 ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
                  <p>{location.hours}</p>
                  <p className="text-sm text-gray-500">
                    {language === 'zh' ? '請提前預約，避免撲空' : 'Please make an appointment in advance'}
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* 電子郵件 */}
            <AnimatedCard 
              customDelay={0.6}
              className="flex items-start space-x-4 bg-transparent shadow-none border-none p-0"
              hoverEffect={false}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#B8956A] rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 font-display">電子郵件</h4>
                <p className="text-gray-600 font-body">
                  <a href="mailto:info@nailstudio.com" className="hover:text-[#B8956A] transition-colors">
                    info@nailstudio.com
                  </a>
                </p>
              </div>
            </AnimatedCard>
          </div>

          {/* 預約按鈕 */}
          <div className="text-center mt-8">
            <button className="aurora-background text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl font-body">
              立即預約
            </button>
          </div>
        </AnimatedContent>

        {/* 預約須知 */}
        <AnimatedContent 
          customDelay={0.7}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-display">預約須知</h3>
          
          <AnimatedGrid 
            columns={3}
            staggerDelay={0.1}
            className="gap-6"
          >
            <AnimatedCard 
              customDelay={0.8}
              className="text-center p-4 bg-transparent shadow-none border-none"
              hoverEffect={false}
            >
              <div className="w-16 h-16 bg-[#B8956A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold font-body">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 font-display">預約準備</h4>
              <p className="text-gray-600 text-sm font-body">可傳圖報價或告知預算討論，新客需付訂金500元</p>
            </AnimatedCard>

            <AnimatedCard 
              customDelay={0.9}
              className="text-center p-4 bg-transparent shadow-none border-none"
              hoverEffect={false}
            >
              <div className="w-16 h-16 bg-[#B8956A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold font-body">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 font-display">工作室環境</h4>
              <p className="text-gray-600 text-sm font-body">個人工作室不開放攜伴，有貓咪出沒請注意</p>
            </AnimatedCard>

            <AnimatedCard 
              customDelay={1.0}
              className="text-center p-4 bg-transparent shadow-none border-none"
              hoverEffect={false}
            >
              <div className="w-16 h-16 bg-[#B8956A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold font-body">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 font-display">時間政策</h4>
              <p className="text-gray-600 text-sm font-body">預約保留10分鐘，遲到30分鐘改為單色服務</p>
            </AnimatedCard>
          </AnimatedGrid>
        </AnimatedContent>
      </ScrollTriggerContainer>
    </section>
  );
}

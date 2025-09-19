// 內聯 SVG 圖標組件
const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);

const EnvelopeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
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

import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle, 
  AnimatedContent,
  AnimatedCard,
  AnimatedGrid
} from "../ui/UnifiedScrollAnimation";

export default function Contact() {
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-display">聯絡資訊</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 地址 */}
            <AnimatedCard 
              customDelay={0.3}
              className="flex items-start space-x-4 bg-transparent shadow-none border-none p-0"
              hoverEffect={false}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#876D5A] rounded-full flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 font-display">店家地址</h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  110台北市信義區市府路1號<br />
                  <span className="text-sm text-gray-500 font-body">近捷運市政府站</span>
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
                <div className="w-12 h-12 bg-[#876D5A] rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 font-display">預約電話</h4>
                <p className="text-gray-600 font-body">
                  <a href="tel:+886-2-2345-6789" className="hover:text-[#876D5A] transition-colors">
                    02-2345-6789
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
                <div className="w-12 h-12 bg-[#876D5A] rounded-full flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 font-display">營業時間</h4>
                <div className="text-gray-600 space-y-1 font-body">
                  <p>週一至週五：10:00 - 20:00</p>
                  <p>週六至週日：10:00 - 18:00</p>
                  <p className="text-sm text-gray-500">國定假日營業時間請來電確認</p>
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
                <div className="w-12 h-12 bg-[#876D5A] rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 font-display">電子郵件</h4>
                <p className="text-gray-600 font-body">
                  <a href="mailto:info@nailstudio.com" className="hover:text-[#876D5A] transition-colors">
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
              <div className="w-16 h-16 bg-[#876D5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold font-body">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 font-display">提前預約</h4>
              <p className="text-gray-600 text-sm font-body">建議提前24小時預約，確保服務品質</p>
            </AnimatedCard>

            <AnimatedCard 
              customDelay={0.9}
              className="text-center p-4 bg-transparent shadow-none border-none"
              hoverEffect={false}
            >
              <div className="w-16 h-16 bg-[#876D5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold font-body">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 font-display">準時到店</h4>
              <p className="text-gray-600 text-sm font-body">請準時到店，遲到可能影響服務時間</p>
            </AnimatedCard>

            <AnimatedCard 
              customDelay={1.0}
              className="text-center p-4 bg-transparent shadow-none border-none"
              hoverEffect={false}
            >
              <div className="w-16 h-16 bg-[#876D5A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold font-body">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2 font-display">取消政策</h4>
              <p className="text-gray-600 text-sm font-body">如需取消請提前4小時告知，避免影響其他客人</p>
            </AnimatedCard>
          </AnimatedGrid>
        </AnimatedContent>
      </ScrollTriggerContainer>
    </section>
  );
}

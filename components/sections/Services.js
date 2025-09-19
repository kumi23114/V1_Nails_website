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
    <section id="services" className="py-16 min-h-screen relative overflow-hidden">
      {/* 背景圖片 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/nail.background2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* 背景遮罩層，確保內容清晰可讀 */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>
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
          className={`text-3xl font-bold text-center text-gray-900 ${language === 'zh' ? 'font-chinese' : 'font-display'}`}
        >
          {services.title}
        </AnimatedTitle>

        <AnimatedSubtitle customDelay={0.1} className={`text-lg text-center font-medium text-gray-600 ${language === 'zh' ? 'font-chinese' : 'font-body'}`}>
          {services.subtitle}
        </AnimatedSubtitle>

        {/* 服務分類區塊 - 交錯浮現 */}
        <div className="mb-16 space-y-12">
          {services.categories.map((category, categoryIndex) => (
            <AnimatedContent
              key={categoryIndex}
              customDelay={categoryIndex * 0.2}
              className="bg-white/90 rounded-lg p-6 md:p-8 shadow-lg"
            >
              {/* 分類標題 */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-display">
                {category.name}
              </h3>

              {/* 服務項目網格 */}
              <AnimatedGrid
                columns={category.items.length === 4 ? 2 : (category.items.length <= 2 ? 2 : 3)}
                staggerDelay={0.1}
                itemAnimationType="card"
                className="mb-6"
              >
                {category.items.map((item, itemIndex) => (
                  <AnimatedCard
                    key={itemIndex}
                    customDelay={itemIndex * 0.1}
                    hoverEffect={true}
                    animationType="card"
                    className="min-h-[180px] flex flex-col justify-center text-center p-4"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-3 font-display">
                      {item.name}
                    </h4>

                    {/* 價格顯示 */}
                    <div className="mb-3">
                      {item.price ? (
                        <div className="text-2xl font-bold text-button font-body">
                          NT$ {item.price.toLocaleString()}
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-button font-body">
                            手部 NT$ {item.handPrice.toLocaleString()}
                          </div>
                          {item.footPrice && (
                            <div className="text-lg font-bold text-button font-body">
                              足部 NT$ {item.footPrice.toLocaleString()}
                            </div>
                          )}
                          {item.note && (
                            <div className="text-xs text-gray-500 font-body">
                              {item.note}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* 只有基礎保養區塊顯示說明文字 */}
                    {category.name === '基礎保養' || category.name === 'Basic Care' ? (
                      <p className="text-gray-600 text-sm font-body leading-relaxed">
                        {item.desc}
                      </p>
                    ) : null}
                  </AnimatedCard>
                ))}
              </AnimatedGrid>

              {/* 分類說明 */}
              {category.notes && category.notes.length > 0 && (
                <AnimatedContent customDelay={0.3}>
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <ul className="space-y-1 text-gray-600 text-sm font-body">
                      {category.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="flex items-start">
                          <span className="text-button mr-2 text-xs">•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedContent>
              )}
            </AnimatedContent>
          ))}
        </div>

        {/* 預約須知區塊 - 延遲浮現 */}
        <AnimatedContent
          customDelay={0.6}
          className="bg-white/90 rounded-lg p-6 md:p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center font-display">
            {language === 'zh' ? '預約須知' : 'Booking Notice'}
          </h3>

          <div className="space-y-8">
            {/* 基本注意事項 */}
            <AnimatedContent customDelay={0.7}>
              <h4 className="font-semibold text-gray-900 mb-4 font-display border-b border-gray-200 pb-2">
                {language === 'zh' ? '注意事項' : 'Important Notes'}
              </h4>
              <ul className="space-y-3 text-gray-700 font-body">
                {(language === 'zh' ? [
                  '預約前可傳圖報價，或告知預算先行討論',
                  '新客首次預約需付訂金500元，預約當天折抵',
                  '付款方式：現金／轉帳(國泰)',
                  '個人工作室不開放攜伴',
                  '工作室有貓(不定時出現)',
                  '※過敏/怕貓/介意者慎約!'
                ] : [
                  'You can send photos for pricing or discuss your budget before booking',
                  'New customers need to pay a 500 NTD deposit, which will be deducted on the day',
                  'Payment methods: Cash / Bank transfer (Cathay Bank)',
                  'Personal studio does not allow companions',
                  'There are cats in the studio (appear from time to time)',
                  '※Please be cautious if allergic/afraid/concerned!'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-button mr-3 mt-1">•</span>
                    <span className={index === 5 ? 'text-red-600 font-medium' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContent>

            {/* 設計服務說明 */}
            <AnimatedContent customDelay={0.8}>
              <h4 className="font-semibold text-gray-900 mb-4 font-display border-b border-gray-200 pb-2">
                {language === 'zh' ? '設計服務說明' : 'Design Service Information'}
              </h4>
              <ul className="space-y-3 text-gray-700 font-body">
                {(language === 'zh' ? [
                  '自由發揮／不挑款 僅限預約三次以上客人',
                  '可提供: 深淺色系／喜好風格／元素／類似圖片',
                  '或選擇開盲盒(一切設計交由美甲師決定)'
                ] : [
                  'Free design/no specific style only for customers with 3+ appointments',
                  'Can provide: color preferences/style preferences/elements/reference images',
                  'Or choose mystery box (all design decisions by nail artist)'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-button mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedContent>

            {/* 時間與遲到政策 */}
            <AnimatedContent customDelay={0.9}>
              <h4 className="font-semibold text-gray-900 mb-4 font-display border-b border-gray-200 pb-2">
                {language === 'zh' ? '時間與遲到政策' : 'Time & Lateness Policy'}
              </h4>
              <ul className="space-y-3 text-gray-700 font-body">
                {(language === 'zh' ? [
                  '預約保留10分鐘',
                  '遲到30分鐘，改為服務單色',
                  '遲到1h，將取消本次預約，並不退還訂金',
                  '更改時間請提前3~5天告知',
                  '若要提早來，請先訊息詢問'
                ] : [
                  'Appointments are held for 10 minutes',
                  '30 minutes late: service changed to solid color only',
                  '1 hour late: appointment cancelled, deposit non-refundable',
                  'Please notify 3-5 days in advance for time changes',
                  'Please message first if you need to arrive early'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-button mr-3 mt-1">•</span>
                    <span className={index >= 1 && index <= 2 ? 'text-orange-600 font-medium' : ''}>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContent>

            {/* 最終聲明 */}
            <AnimatedContent customDelay={1.0}>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-800 font-medium font-body">
                  {language === 'zh' ? '本店擁有最終解釋權' : 'The studio reserves the right of final interpretation'}
                </p>
                <p className="text-button font-bold text-lg mt-2 font-display">
                  ZERO NAILS
                </p>
              </div>
            </AnimatedContent>
          </div>
        </AnimatedContent>

        {/* 外部連結 - 最後浮現 */}
        <AnimatedContent
          customDelay={0.9}
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

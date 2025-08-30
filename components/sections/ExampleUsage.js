import { 
  ScrollTriggerContainer, 
  AnimatedTitle, 
  AnimatedSubtitle, 
  AnimatedCard, 
  AnimatedContent, 
  AnimatedGrid,
  Floating3DCard 
} from "../ui/UnifiedScrollAnimation";

export default function ExampleUsage() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      {/* 第一個區塊 - 標題優先浮現 */}
      <ScrollTriggerContainer 
        className="container mx-auto px-4 mb-20"
        staggerDelay={0.3}
        animationType="fadeUp"
      >
        <AnimatedTitle 
          customDelay={0}
          enableGlow={true}
          className="text-3xl font-bold text-purple-800 text-center"
        >
          優雅的滑動觸發動畫
        </AnimatedTitle>
        
        <AnimatedSubtitle customDelay={0.2} className="text-lg text-center font-medium text-purple-600">
          隨著滾動，元素會以優雅的方式從下往上浮現，創造流暢的視覺體驗
        </AnimatedSubtitle>
      </ScrollTriggerContainer>

      {/* 第二個區塊 - 卡片網格交錯浮現 */}
      <ScrollTriggerContainer 
        className="container mx-auto px-4 mb-20"
        staggerDelay={0.2}
        enableParallax={true}
        parallaxSpeed={0.4}
      >
        <AnimatedTitle 
          customDelay={0}
          className="text-3xl font-bold text-blue-800 mb-12 text-center"
        >
          特色功能展示
        </AnimatedTitle>
        
        <AnimatedGrid 
          columns={3}
          staggerDelay={0.15}
          className="mb-16"
        >
          {[
            { title: "滑動觸發", desc: "元素進入視窗時自動觸發動畫", icon: "🎯" },
            { title: "交錯動畫", desc: "多個元素依序浮現，創造層次感", icon: "✨" },
            { title: "響應式設計", desc: "針對不同裝置優化動畫效果", icon: "📱" },
            { title: "視差效果", desc: "支援視差滾動，增加深度感", icon: "🌊" },
            { title: "3D 浮動", desc: "特殊的 3D 浮動動畫效果", icon: "🚀" },
            { title: "自定義延遲", desc: "可控制每個元素的動畫時機", icon: "⏰" }
          ].map((item, index) => (
            <AnimatedCard 
              key={index} 
              customDelay={index * 0.1}
              hoverEffect={true}
              className="text-center min-h-[180px] flex flex-col justify-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm font-body">{item.desc}</p>
            </AnimatedCard>
          ))}
        </AnimatedGrid>
      </ScrollTriggerContainer>

      {/* 第三個區塊 - 3D 浮動效果 */}
      <ScrollTriggerContainer 
        className="container mx-auto px-4"
        staggerDelay={0.4}
        animationType="slideUp"
      >
        <AnimatedTitle 
          customDelay={0}
          className="text-3xl font-bold text-indigo-800 mb-12 text-center"
        >
          3D 浮動特效
        </AnimatedTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Floating3DCard 
            floatDistance={20}
            floatDuration={5}
            rotationAngle={8}
            className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-purple-800 mb-4 font-display">
              左側浮動卡片
            </h3>
            <p className="text-purple-700 font-body">
              這個卡片具有 3D 浮動效果，會持續上下浮動並輕微旋轉，創造生動的視覺效果。
            </p>
          </Floating3DCard>
          
          <Floating3DCard 
            floatDistance={25}
            floatDuration={6}
            rotationAngle={-6}
            className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4 font-display">
              右側浮動卡片
            </h3>
            <p className="text-blue-700 font-body">
              右側卡片使用不同的浮動參數，創造不對稱的動態效果，增加頁面的視覺豐富度。
            </p>
          </Floating3DCard>
        </div>
      </ScrollTriggerContainer>
    </section>
  );
}

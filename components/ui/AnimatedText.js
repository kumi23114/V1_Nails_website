import { useEffect, useRef } from 'react';

// 動態導入GSAP以避免服務器端渲染問題
let gsap = null;
let ScrollTrigger = null;

// 只在客戶端導入GSAP
if (typeof window !== 'undefined') {
  import('gsap').then((module) => {
    gsap = module.gsap;
    import('gsap/ScrollTrigger').then((stModule) => {
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
    });
  });
}

export default function AnimatedText({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  stagger = 0.2,
  y = 50,
  ease = "power2.out",
  style = {},
  splitBy = "sentence" // 新增：可選擇按句子或段落分割
}) {
  const textRef = useRef(null);

  useEffect(() => {
    // 確保GSAP已加載
    if (!textRef.current || !gsap || !ScrollTrigger) return;

    const text = textRef.current;
    const elements = text.querySelectorAll('.animate-element');
    
    // 初始狀態：文字隱藏並向下偏移
    gsap.set(elements, { 
      y: y, 
      opacity: 0,
      display: 'block' // 改為 block 以避免擠在一起
    });

    // 創建動畫時間軸
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // 添加文字動畫
    tl.to(elements, {
      y: 0,
      opacity: 1,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: ease
    });

    // 清理函數
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [delay, duration, stagger, y, ease, splitBy]);

  // 將文字分割成句子或段落並添加動畫類
  const renderAnimatedText = () => {
    if (typeof children === 'string') {
      if (splitBy === "sentence") {
        // 按句子分割（句號、問號、驚嘆號）
        const sentences = children.split(/([.!?]+)/).filter(s => s.trim());
        return sentences.map((sentence, index) => (
          <span key={index} className="animate-element">
            {sentence}
          </span>
        ));
      } else if (splitBy === "paragraph") {
        // 按段落分割（換行符）
        const paragraphs = children.split(/\n+/).filter(p => p.trim());
        return paragraphs.map((paragraph, index) => (
          <p key={index} className="animate-element">
            {paragraph}
          </p>
        ));
      } else {
        // 預設按句子分割
        const sentences = children.split(/([.!?]+)/).filter(s => s.trim());
        return sentences.map((sentence, index) => (
          <span key={index} className="animate-element">
            {sentence}
          </span>
        ));
      }
    }
    return children;
  };

  return (
    <div ref={textRef} className={className} style={style}>
      {renderAnimatedText()}
    </div>
  );
}

// 標題動畫組件
export function AnimatedTitle({ children, className = "", noShadow = false, language = 'zh', ...props }) {
  const shadowStyle = noShadow ? {} : {
    textShadow: '3px 3px 8px rgba(0, 0, 0, 0.4), 1px 1px 4px rgba(0, 0, 0, 0.3), 0 0 12px rgba(0, 0, 0, 0.2)',
    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
  };

  const fontClass = language === 'zh' ? 'font-chinese' : 'font-display';

  return (
    <AnimatedText
      className={`text-3xl md:text-5xl font-semibold tracking-tight ${fontClass} ${className}`}
      y={60}
      duration={1}
      stagger={0.3}
      splitBy="sentence"
      style={shadowStyle}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

// 副標題動畫組件
export function AnimatedSubtitle({ children, className = "", noShadow = false, ...props }) {
  const shadowStyle = noShadow ? {} : {
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.15)',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))'
  };
  
  return (
    <AnimatedText 
      className={`text-lg md:text-xl text-gray-600 ${className}`}
      y={40}
      duration={0.8}
      stagger={0.2}
      delay={0.3}
      splitBy="sentence"
      style={shadowStyle}
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

// 段落動畫組件
export function AnimatedParagraph({ children, className = "", ...props }) {
  return (
    <AnimatedText 
      className={`text-base text-gray-700 leading-relaxed ${className}`}
      y={30}
      duration={0.6}
      stagger={0.15}
      delay={0.5}
      splitBy="sentence"
      {...props}
    >
      {children}
    </AnimatedText>
  );
}

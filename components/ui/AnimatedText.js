import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// 行動版檢測 hook
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.2,
  y = 50,
  style = {},
  splitBy = "sentence" // 可選擇按句子或段落分割
}) {
  const ref = useRef(null);
  const isMobile = useMobileDetection();
  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "-30px" : "-50px",
    amount: 0.3
  });

  // 將文字分割成句子或段落並添加動畫
  const renderAnimatedText = () => {
    if (typeof children === 'string') {
      if (splitBy === "sentence") {
        // 按句子分割（句號、問號、驚嘆號）
        const sentences = children.split(/([.!?]+)/).filter(s => s.trim());
        return sentences.map((sentence, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                y: y,
                filter: "blur(2px)"
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: isMobile ? duration * 0.7 : duration,
                  delay: delay + (index * stagger),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
          >
            {sentence}
          </motion.span>
        ));
      } else if (splitBy === "paragraph") {
        // 按段落分割（換行符）
        const paragraphs = children.split(/\n+/).filter(p => p.trim());
        return paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: y,
                filter: "blur(3px)"
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: isMobile ? duration * 0.7 : duration,
                  delay: delay + (index * stagger),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
          >
            {paragraph}
          </motion.p>
        ));
      } else {
        // 預設按句子分割
        const sentences = children.split(/([.!?]+)/).filter(s => s.trim());
        return sentences.map((sentence, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                y: y,
                filter: "blur(2px)"
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: isMobile ? duration * 0.7 : duration,
                  delay: delay + (index * stagger),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
          >
            {sentence}
          </motion.span>
        ));
      }
    }
    return children;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: isMobile ? stagger * 0.7 : stagger,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {renderAnimatedText()}
    </motion.div>
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

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from "../../contexts/LanguageContext";

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

// 優雅的浮現動畫變體
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    rotateX: -15,
    filter: "blur(4px)", // 輕微的高斯模糊
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 標題專用動畫變體
const titleVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(3px)", // 輕微的高斯模糊
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 小卡專用動畫變體
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateY: -10,
    filter: "blur(5px)", // 適中的高斯模糊
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 內容專用動畫變體
const contentVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    filter: "blur(3px)", // 輕微的高斯模糊
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 從左側滑入動畫變體
const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    y: 20,
    filter: "blur(4px)", // 輕微的高斯模糊
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 從右側滑入動畫變體
const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: 20,
    filter: "blur(4px)", // 輕微的高斯模糊
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 縮放浮現動畫變體
const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
    filter: "blur(6px)", // 適中的高斯模糊
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)", // 清除模糊
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 主容器組件 - 滑動觸發動畫
export const ScrollTriggerContainer = ({ 
  children, 
  className = "", 
  staggerDelay = 0.2, 
  viewportMargin = "-100px",
  animationType = "fadeUp",
  enableParallax = false,
  parallaxSpeed = 0.5
}) => {
  const ref = useRef(null);
  const isMobile = useMobileDetection();
  // 優化觸發參數 - 保持進入觸發，延遲消失觸發
  const desktopViewportMargin = "-100px 0px -200px 0px"; // 桌面版：進入-100px，消失-200px
  const mobileViewportMargin = "-50px 0px -100px 0px"; // 手機版：進入-50px，消失-100px
  const desktopAmount = 0.05; // 桌面版降低觸發閾值
  const mobileAmount = 0.02; // 手機版更低的觸發閾值
  
  const isInView = useInView(ref, { 
    once: false, // 允許重複觸發
    margin: isMobile ? mobileViewportMargin : desktopViewportMargin,
    amount: isMobile ? mobileAmount : desktopAmount 
  });

  // 調試信息
  // if (process.env.NODE_ENV === 'development') {
  //   console.log('ScrollTriggerContainer isInView:', isInView);
  // }

  // 行動版優化參數
  const mobileStaggerDelay = Math.min(staggerDelay * 0.6, 0.15);
  const mobileAnimationDuration = 0.6; // 增加動畫時間讓過渡更平滑

  // 調試信息 - 只在開發環境顯示
  // if (process.env.NODE_ENV === 'development') {
  //   console.log('ScrollTriggerContainer:', {
  //     isInView,
  //     isMobile,
  //     viewportMargin: isMobile ? mobileViewportMargin : desktopViewportMargin,
  //     amount: isMobile ? mobileAmount : desktopAmount,
  //     staggerDelay: isMobile ? mobileStaggerDelay : staggerDelay
  //   });
  // }

  // 視差滾動效果
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? [0, -100 * parallaxSpeed] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
      variants={{
        hidden: { 
          opacity: 0,
          y: isMobile ? 15 : 80, // 手機版減少移動距離
          filter: "blur(3px)" // 輕微的高斯模糊
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)", // 清除模糊
          transition: {
            duration: isMobile ? mobileAnimationDuration : 1.0, // 增加桌面版動畫時間
            staggerChildren: isMobile ? mobileStaggerDelay : staggerDelay,
            delayChildren: isMobile ? 0.05 : 0.2,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// 標題動畫組件
export const AnimatedTitle = ({
  children,
  className = "",
  customDelay = 0,
  enableGlow = true,
  animationType = "title",
  style = {}
}) => {
  const isMobile = useMobileDetection();
  const { language } = useLanguage();

  const glowStyle = enableGlow ? {
    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
    textShadow: '0 0 30px rgba(255, 255, 255, 0.2)'
  } : {};

  // 合併 glow 樣式和自定義樣式
  const combinedStyle = { ...glowStyle, ...style };

  const getVariants = () => {
    switch (animationType) {
      case "slideInLeft":
        return slideInLeftVariants;
      case "slideInRight":
        return slideInRightVariants;
      case "scaleIn":
        return scaleInVariants;
      case "title":
      default:
        return titleVariants;
    }
  };

  // 檢查是否傳入了自定義樣式，如果沒有則使用預設樣式
  const hasCustomStyles = className.includes('text-') || className.includes('font-') || className.includes('mb-') || className.includes('mt-');

  const fontClass = language === 'zh' ? 'font-chinese' : 'font-display';
  const defaultStyles = hasCustomStyles ? "" : `text-3xl font-bold text-center mb-6 ${fontClass}`;
  const finalClassName = `${defaultStyles} ${className}`.trim();

  return (
    <motion.h2
      className={finalClassName}
      variants={getVariants()}
      custom={customDelay}
      style={combinedStyle}
      whileHover={!isMobile ? {
        scale: 1.05,
        transition: { duration: 0.3 }
      } : {}}
    >
      {children}
    </motion.h2>
  );
};

// 副標題動畫組件
export const AnimatedSubtitle = ({
  children,
  className = "",
  customDelay = 0.1,
  animationType = "content",
  style = {},
  ...props
}) => {
  const { language } = useLanguage();

  const getVariants = () => {
    switch (animationType) {
      case "slideInLeft":
        return slideInLeftVariants;
      case "slideInRight":
        return slideInRightVariants;
      case "scaleIn":
        return scaleInVariants;
      case "content":
      default:
        return contentVariants;
    }
  };

  // 檢查是否傳入了自定義樣式，如果沒有則使用預設樣式
  const hasCustomStyles = className.includes('text-') || className.includes('font-') || className.includes('mb-') || className.includes('mt-') || className.includes('max-w-');

  const fontClass = language === 'zh' ? 'font-chinese' : 'font-body';
  const defaultStyles = hasCustomStyles ? "" : `text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto ${fontClass} font-medium`;
  const finalClassName = `${defaultStyles} ${className}`.trim();

  return (
    <motion.p
      className={finalClassName}
      variants={getVariants()}
      custom={customDelay}
      style={style}
      {...props}
    >
      {children}
    </motion.p>
  );
};

// 小卡動畫組件
export const AnimatedCard = ({ 
  children, 
  className = "", 
  customDelay = 0,
  hoverEffect = true,
  animationType = "card",
  whileHover = {},
  whileTap = {}
}) => {
  const isMobile = useMobileDetection();

  const defaultHoverEffect = hoverEffect ? {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  } : {};

  const getVariants = () => {
    switch (animationType) {
      case "slideInLeft":
        return slideInLeftVariants;
      case "slideInRight":
        return slideInRightVariants;
      case "scaleIn":
        return scaleInVariants;
      case "fadeUp":
        return fadeUpVariants;
      case "card":
      default:
        return cardVariants;
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 ${className}`}
      variants={getVariants()}
      custom={customDelay}
      whileHover={!isMobile && hoverEffect ? (whileHover || defaultHoverEffect) : {}}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
};

// 內容區塊動畫組件
export const AnimatedContent = ({ 
  children, 
  className = "", 
  customDelay = 0,
  animationType = "content"
}) => {
  const getVariants = () => {
    switch (animationType) {
      case "slideInLeft":
        return slideInLeftVariants;
      case "slideInRight":
        return slideInRightVariants;
      case "scaleIn":
        return scaleInVariants;
      case "fadeUp":
        return fadeUpVariants;
      case "content":
      default:
        return contentVariants;
    }
  };
  
  return (
    <motion.div
      className={className}
      variants={getVariants()}
      custom={customDelay}
    >
      {children}
    </motion.div>
  );
};

// 網格容器組件 - 支援響應式網格動畫
export const AnimatedGrid = ({ 
  children, 
  className = "", 
  columns = 3,
  staggerDelay = 0.15,
  itemAnimationType = "card"
}) => {
  const isMobile = useMobileDetection();
  
  // 行動版優化網格列數
  const mobileColumns = Math.min(columns, 2);
  const gridCols = isMobile ? mobileColumns : columns;
  
  // 動態生成網格類別
  const getGridClass = () => {
    if (columns === 5) {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8';
    } else if (columns === 4) {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8';
    } else if (columns === 3) {
      return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8';
    } else {
      return `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(gridCols, 3)} lg:grid-cols-${Math.min(columns, 5)} gap-6 md:gap-8`;
    }
  };

  const gridClass = getGridClass();

  return (
    <motion.div
      className={`${gridClass} ${className}`}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: isMobile ? staggerDelay * 0.7 : staggerDelay,
            delayChildren: isMobile ? 0.1 : 0.2,
          },
        },
      }}
      style={{ perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
};

// 3D 浮動效果組件
export const Floating3DCard = ({ 
  children, 
  className = "", 
  floatDistance = 15,
  floatDuration = 4,
  rotationAngle = 5
}) => {
  const isMobile = useMobileDetection();
  
  // 行動版減少動畫強度
  const mobileFloatDistance = floatDistance * 0.6;
  const mobileRotationAngle = rotationAngle * 0.7;

  return (
    <motion.div
      className={`${className}`}
      animate={{
        y: [0, -(isMobile ? mobileFloatDistance : floatDistance), 0],
        rotateY: [0, isMobile ? mobileRotationAngle : rotationAngle, 0],
      }}
      transition={{
        duration: isMobile ? floatDuration * 0.8 : floatDuration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      whileHover={!isMobile ? {
        scale: 1.08,
        rotateY: rotationAngle * 2,
        transition: { duration: 0.4 }
      } : {}}
    >
      {children}
    </motion.div>
  );
};

// 文字分割動畫組件 - 替代 GSAP 的文字動畫
export const AnimatedText = ({ 
  children, 
  className = "", 
  customDelay = 0,
  splitBy = "sentence",
  staggerDelay = 0.1
}) => {
  const isMobile = useMobileDetection();
  
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
                y: 30,
                filter: "blur(2px)" // 輕微的高斯模糊
              },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)", // 清除模糊
                transition: {
                  duration: 0.6,
                  delay: customDelay + (index * staggerDelay),
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
                y: 40,
                filter: "blur(3px)" // 輕微的高斯模糊
              },
              visible: { 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)", // 清除模糊
                transition: {
                  duration: 0.7,
                  delay: customDelay + (index * staggerDelay),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
          >
            {paragraph}
          </motion.p>
        ));
      }
    }
    return children;
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: isMobile ? staggerDelay * 0.7 : staggerDelay,
            delayChildren: customDelay,
          },
        },
      }}
    >
      {renderAnimatedText()}
    </motion.div>
  );
};

// 預設導出
export default ScrollTriggerContainer;

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useMobileDetection } from "../../hooks/useMobileDetection";

// 基礎動畫變體
const baseVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 從左側滑入
const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 從右側滑入
const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 從下方滑入
const slideInUpVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 縮放浮現
const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 淡入浮現
const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 行動版優化動畫變體
const mobileSlideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const mobileSlideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 30,
    y: 10,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const mobileSlideInUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const mobileScaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const mobileFadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// 主容器組件
export const StaggeredContainer = ({ 
  children, 
  className = "", 
  staggerDelay = 0.15, 
  viewportMargin = "-50px",
  animationType = "fadeIn" 
}) => {
  const ref = useRef(null);
  const isMobile = useMobileDetection();
  const isInView = useInView(ref, { 
    once: true, 
    margin: isMobile ? "-30px" : viewportMargin, // 行動版減少觸發邊距
    amount: 0.3 
  });

  // 調整行動版的動畫參數
  const mobileStaggerDelay = Math.min(staggerDelay * 0.7, 0.1); // 減少延遲時間

  const getVariants = () => {
    if (isMobile) {
      // 行動版使用優化的動畫變體
      switch (animationType) {
        case "slideInLeft":
          return mobileSlideInLeftVariants;
        case "slideInRight":
          return mobileSlideInRightVariants;
        case "slideInUp":
          return mobileSlideInUpVariants;
        case "scaleIn":
          return mobileScaleInVariants;
        case "fadeIn":
        default:
          return mobileFadeInVariants;
      }
    } else {
      // 桌面版使用原始動畫變體
      switch (animationType) {
        case "slideInLeft":
          return slideInLeftVariants;
        case "slideInRight":
          return slideInRightVariants;
        case "slideInUp":
          return slideInUpVariants;
        case "scaleIn":
          return scaleInVariants;
        case "fadeIn":
        default:
          return fadeInVariants;
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: isMobile ? mobileStaggerDelay : staggerDelay,
            delayChildren: isMobile ? 0.05 : 0.1, // 行動版減少初始延遲
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

// 子元素組件
export const StaggeredItem = ({ 
  children, 
  className = "", 
  animationType = "fadeIn",
  customDelay = 0,
  whileHover = {},
  whileTap = {}
}) => {
  const isMobile = useMobileDetection();

  // 在行動版上，調整動畫參數但保持動畫效果
  const getVariants = () => {
    if (isMobile) {
      // 行動版使用優化的動畫變體
      switch (animationType) {
        case "slideInLeft":
          return mobileSlideInLeftVariants;
        case "slideInRight":
          return mobileSlideInRightVariants;
        case "slideInUp":
          return mobileSlideInUpVariants;
        case "scaleIn":
          return mobileScaleInVariants;
        case "fadeIn":
        default:
          return mobileFadeInVariants;
      }
    } else {
      // 桌面版使用原始動畫變體
      switch (animationType) {
        case "slideInLeft":
          return slideInLeftVariants;
        case "slideInRight":
          return slideInRightVariants;
        case "slideInUp":
          return slideInUpVariants;
        case "scaleIn":
          return scaleInVariants;
        case "fadeIn":
        default:
          return fadeInVariants;
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      custom={customDelay}
      whileHover={isMobile ? {} : whileHover} // 行動版不使用 hover 效果
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
};

// 特殊效果組件
export const FloatingItem = ({ 
  children, 
  className = "", 
  floatDistance = 10,
  floatDuration = 3 
}) => {
  const isMobile = useMobileDetection();

  // 行動版使用較小的浮動距離和較快的動畫
  const mobileFloatDistance = floatDistance * 0.6;
  const mobileFloatDuration = floatDuration * 0.8;

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -(isMobile ? mobileFloatDistance : floatDistance), 0],
      }}
      transition={{
        duration: isMobile ? mobileFloatDuration : floatDuration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
};

// 彈跳效果組件
export const BounceItem = ({ 
  children, 
  className = "", 
  bounceStrength = 0.1 
}) => {
  const isMobile = useMobileDetection();

  // 行動版使用較小的彈跳強度
  const mobileBounceStrength = bounceStrength * 0.7;

  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1 + (isMobile ? mobileBounceStrength : bounceStrength),
        transition: {
          type: "spring",
          stiffness: isMobile ? 300 : 400, // 行動版使用較軟的彈簧
          damping: isMobile ? 15 : 10,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// 預設導出
export default StaggeredContainer;

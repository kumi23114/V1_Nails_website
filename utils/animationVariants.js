/**
 * 共用動畫變體定義
 * 統一管理所有動畫效果，避免重複定義
 */

// 共用的緩動函數
export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  spring: [0.6, -0.05, 0.01, 0.99],
  bounce: [0.68, -0.55, 0.265, 1.55]
};

// 基礎動畫變體
export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASING.smooth,
    },
  },
};

// 標題專用動畫變體
export const titleVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: EASING.smooth,
    },
  },
};

// 小卡專用動畫變體
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateY: -10,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASING.smooth,
    },
  },
};

// 內容專用動畫變體
export const contentVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: EASING.smooth,
    },
  },
};

// 從左側滑入動畫變體
export const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASING.smooth,
    },
  },
};

// 從右側滑入動畫變體
export const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 60,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASING.smooth,
    },
  },
};

// 縮放浮現動畫變體
export const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotateY: 15,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: EASING.smooth,
    },
  },
};

// 行動版優化變體生成器
export const createMobileVariants = (baseVariants, mobileMultiplier = 0.7) => {
  return {
    hidden: {
      ...baseVariants.hidden,
      y: baseVariants.hidden.y ? baseVariants.hidden.y * mobileMultiplier : undefined,
      x: baseVariants.hidden.x ? baseVariants.hidden.x * mobileMultiplier : undefined,
      scale: baseVariants.hidden.scale ? 
        1 - ((1 - baseVariants.hidden.scale) * mobileMultiplier) : undefined,
    },
    visible: {
      ...baseVariants.visible,
      transition: {
        ...baseVariants.visible.transition,
        duration: baseVariants.visible.transition.duration * 0.8,
      },
    },
  };
};

// 懸停效果變體
export const hoverVariants = {
  default: {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3, ease: EASING.smooth }
  },
  card: {
    scale: 1.08,
    y: -8,
    rotateY: 5,
    transition: { duration: 0.4, ease: EASING.smooth }
  },
  button: {
    scale: 1.02,
    y: -2,
    transition: { duration: 0.2, ease: EASING.smooth }
  }
};

// 動畫變體選擇器
export const getVariantsByType = (type, isMobile = false) => {
  const variants = {
    fadeUp: fadeUpVariants,
    title: titleVariants,
    card: cardVariants,
    content: contentVariants,
    slideInLeft: slideInLeftVariants,
    slideInRight: slideInRightVariants,
    scaleIn: scaleInVariants,
  };

  const selectedVariants = variants[type] || fadeUpVariants;
  
  return isMobile ? createMobileVariants(selectedVariants) : selectedVariants;
};

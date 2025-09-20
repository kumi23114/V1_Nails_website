/**
 * 共用動畫變體定義
 * 統一管理所有動畫效果，避免重複定義
 */

// 共用的緩動函數 - 優化流暢度
export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  spring: [0.6, -0.05, 0.01, 0.99],
  bounce: [0.68, -0.55, 0.265, 1.55],
  // 新增更流暢的緩動函數
  fluid: [0.4, 0.0, 0.2, 1.0],        // 更自然的流動感
  gentle: [0.25, 0.1, 0.25, 1.0],     // 溫和的動畫
  snappy: [0.4, 0.0, 0.6, 1.0]        // 快速但流暢
};

// 基礎動畫變體 - 優化流暢度
export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 20,                    // 減少移動距離
    scale: 0.98,              // 減少縮放幅度
    // 移除模糊效果以提升性能
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,          // 縮短動畫時間
      ease: EASING.fluid,     // 使用更流暢的緩動
    },
  },
};

// 標題專用動畫變體 - 帶有高級朦朧效果
export const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,                    // 減少移動距離
    scale: 0.97,              // 減少縮放幅度
    filter: "blur(6px)",      // 添加高斯模糊營造朦朧感
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",      // 清除模糊，呈現清晰效果
    transition: {
      duration: 0.8,          // 延長時間讓模糊到清晰的過程更優雅
      ease: EASING.gentle,    // 使用溫和的緩動
    },
  },
};

// 小卡專用動畫變體 - 從右到左優雅滑入，帶有高級朦朧效果
export const cardVariants = {
  hidden: {
    opacity: 0,
    x: 80,                    // 增加移動幅度，從更遠的右側開始
    filter: "blur(8px)",      // 添加高斯模糊營造朦朧感
  },
  visible: {
    opacity: 1,
    x: 0,                     // 滑入到正常位置
    filter: "blur(0px)",      // 清除模糊，呈現清晰效果
    transition: {
      duration: 0.8,          // 稍微延長時間讓模糊到清晰的過程更優雅
      ease: EASING.gentle,    // 使用溫和的緩動函數
    },
  },
};

// 內容專用動畫變體 - 帶有高級朦朧效果
export const contentVariants = {
  hidden: {
    opacity: 0,
    y: 15,                    // 減少移動距離
    scale: 0.96,              // 減少縮放幅度
    filter: "blur(4px)",      // 添加高斯模糊營造朦朧感
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",      // 清除模糊，呈現清晰效果
    transition: {
      duration: 0.6,          // 延長時間讓模糊到清晰的過程更優雅
      ease: EASING.fluid,     // 使用流暢的緩動
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

// 懸停效果變體 - 優化流暢度
export const hoverVariants = {
  default: {
    scale: 1.02,              // 減少縮放幅度
    y: -3,                    // 減少移動距離
    transition: { duration: 0.2, ease: EASING.snappy }
  },
  card: {
    scale: 1.02,              // 輕微縮放
    y: -3,                    // 輕微上移
    x: -2,                    // 輕微左移，呼應從右到左的主題
    transition: { duration: 0.25, ease: EASING.gentle }
  },
  button: {
    scale: 1.01,              // 減少縮放幅度
    y: -1,                    // 減少移動距離
    transition: { duration: 0.15, ease: EASING.snappy }
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

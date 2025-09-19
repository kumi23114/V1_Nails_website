// 通用樣式常數
export const COMMON_STYLES = {
  // 按鈕基礎樣式
  BUTTON_BASE: "text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300",

  // 圓形按鈕
  CIRCULAR_BUTTON: "w-14 h-14 flex items-center justify-center hover:scale-110",

  // 社交按鈕
  SOCIAL_BUTTON: "group flex items-center space-x-3 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
  
  // 圖標容器
  ICON_CONTAINER: "w-8 h-8 bg-white rounded-full flex items-center justify-center",
  
  // 動畫效果
  SLIDE_IN: "animate-in slide-in-from-bottom-2 duration-300",
  
  // 響應式容器
  CONTAINER: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  
  // 卡片樣式
  CARD: "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
  
  // 標題樣式
  HEADING: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800",
  
  // 副標題樣式
  SUBHEADING: "text-lg md:text-xl text-gray-600",
  
  // 文字樣式
  BODY_TEXT: "text-base text-gray-700 leading-relaxed",
  
  // 連結樣式
  LINK: "text-blue-600 hover:text-blue-800 underline transition-colors duration-200",
  
  // 分隔線
  DIVIDER: "border-t border-gray-200 my-8",
  
  // 間距
  SECTION_PADDING: "py-16 px-4",
  SECTION_MARGIN: "my-16",
  
  // 網格
  GRID_2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  GRID_3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  GRID_4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
  
  // Flexbox
  FLEX_CENTER: "flex items-center justify-center",
  FLEX_BETWEEN: "flex items-center justify-between",
  FLEX_COL_CENTER: "flex flex-col items-center justify-center",
  
  // 背景
  BACKGROUND_PRIMARY: "bg-[#F8F6F4]",
  BACKGROUND_SECONDARY: "bg-[#B8956A]",
  BACKGROUND_ACCENT: "bg-[#9D7F4F]",

  // 文字顏色
  TEXT_PRIMARY: "text-[#A68B5B]",
  TEXT_SECONDARY: "text-[#B8956A]",
  TEXT_ACCENT: "text-[#9D7F4F]",

  // 邊框
  BORDER_PRIMARY: "border-[#B8956A]",
  BORDER_ACCENT: "border-[#9D7F4F]",
  
  // 圓角
  ROUNDED_SM: "rounded-md",
  ROUNDED_MD: "rounded-lg",
  ROUNDED_LG: "rounded-xl",
  ROUNDED_FULL: "rounded-full",
  
  // 陰影
  SHADOW_SM: "shadow-sm",
  SHADOW_MD: "shadow-md",
  SHADOW_LG: "shadow-lg",
  SHADOW_XL: "shadow-xl",
  
  // 過渡
  TRANSITION_FAST: "transition-all duration-200",
  TRANSITION_NORMAL: "transition-all duration-300",
  TRANSITION_SLOW: "transition-all duration-500",
  
  // 懸停效果
  HOVER_SCALE: "hover:scale-105",
  HOVER_SCALE_LG: "hover:scale-110",
  HOVER_LIFT: "hover:-translate-y-1",
  
  // 響應式文字
  TEXT_RESPONSIVE: {
    H1: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
    H2: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
    H3: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
    H4: "text-lg md:text-xl lg:text-2xl xl:text-3xl",
    BODY: "text-sm md:text-base lg:text-lg",
    SMALL: "text-xs md:text-sm lg:text-base"
  }
};

// 動畫常數
export const ANIMATIONS = {
  FADE_IN: "animate-in fade-in duration-500",
  SLIDE_UP: "animate-in slide-in-from-bottom-4 duration-500",
  SLIDE_DOWN: "animate-in slide-in-from-top-4 duration-500",
  SLIDE_LEFT: "animate-in slide-in-from-right-4 duration-500",
  SLIDE_RIGHT: "animate-in slide-in-from-left-4 duration-500",
  SCALE_IN: "animate-in zoom-in-95 duration-500",
  BOUNCE_IN: "animate-in bounce-in duration-500"
};

// 間距常數
export const SPACING = {
  XS: "space-y-1",
  SM: "space-y-2",
  MD: "space-y-4",
  LG: "space-y-6",
  XL: "space-y-8",
  XXL: "space-y-12"
};

// 顏色常數
export const COLORS = {
  PRIMARY: {
    50: "#faf8f6",
    100: "#f5f1ed",
    200: "#ede6de",
    300: "#e0d4c7",
    400: "#d1bfa8",
    500: "#b8956a",
    600: "#a68b5b",
    700: "#9d7f4f",
    800: "#8a6f42",
    900: "#735d37"
  },
  BACKGROUND: "#F8F6F4",
  BUTTON: "#B8956A",
  HERO: "#F5F3F1",
  INK: "#A68B5B",
  SAND: {
    50: "#faf8f6",
    100: "#f5f3f1",
    200: "#f0ede9"
  }
};

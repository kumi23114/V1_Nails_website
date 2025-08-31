import React from "react";

const Button = React.forwardRef(({ 
  children, 
  className = "", 
  variant = "primary", 
  size = "md", 
  as: Component = "button",
  ...props 
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-body";
  
  const variants = {
    // 使用 Tailwind 的 ocean 顏色系列（來自 tailwind.config.js）
    primary: "bg-ocean-400 text-white hover:bg-ocean-600 focus:ring-ocean-500",
    secondary: "bg-ocean-400 text-white hover:bg-ocean-600 focus:ring-ocean-500",
    outline: "bg-transparent text-ocean-400 border-2 border-ocean-400 hover:bg-ocean-400 hover:text-white focus:ring-ocean-500",
    ghost: "bg-transparent text-ocean-400 hover:bg-ocean-50 focus:ring-ocean-500",
    
    // Line 按鈕 - 使用綠色品牌色
    line: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
    
    // Instagram 按鈕 - 使用漸層背景
    instagram: "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-white hover:from-orange-500 hover:via-pink-600 hover:to-purple-700 focus:ring-pink-500",
    
    // 回到頂端按鈕
    scrollTop: "bg-ocean-400 text-white hover:bg-ocean-600 focus:ring-ocean-500"
  };
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;

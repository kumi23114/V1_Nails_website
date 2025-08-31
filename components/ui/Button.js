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
    primary: "aurora-primary focus:ring-pink-500",
    secondary: "aurora-secondary focus:ring-gray-500",
    outline: "aurora-outline focus:ring-pink-500",
    ghost: "aurora-ghost focus:ring-pink-500",
    // 新增 Line 和 Instagram 變體
    line: "aurora-line focus:ring-green-500",
    instagram: "aurora-instagram focus:ring-pink-500",
    // 新增回到頂端按鈕變體
    scrollTop: "aurora-secondary focus:ring-gray-500"
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

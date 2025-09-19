import { useEffect, useState } from 'react';

/**
 * 行動版檢測 Hook
 * 檢測螢幕寬度是否小於等於 768px
 * @returns {boolean} 是否為行動版裝置
 */
export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // 初始檢測
    checkMobile();
    
    // 監聽視窗大小變化
    window.addEventListener('resize', checkMobile);
    
    // 清理事件監聽器
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default useMobileDetection;

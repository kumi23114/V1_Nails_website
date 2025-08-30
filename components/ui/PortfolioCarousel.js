import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/content';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './PortfolioCarousel.module.css';

export default function PortfolioCarousel() {
  const { language } = useLanguage();
  const portfolioItems = site[language].portfolio.items;
  
  const carouselRef = useRef(null);
  const [progress, setProgress] = useState(50);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [active, setActive] = useState(0);

  // 獲取Z-index
  const getZindex = (array, index) => {
    return array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i));
  };

  // 顯示項目
  const displayItems = (item, index, activeIndex) => {
    if (!item) return;
    const zIndex = getZindex([...portfolioItems], activeIndex)[index];
    const activeValue = (index - activeIndex) / portfolioItems.length;
    
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', activeValue);
  };

  // 動畫函數
  const animate = () => {
    const clampedProgress = Math.max(0, Math.min(progress, 100));
    const newActive = Math.floor(clampedProgress / 100 * (portfolioItems.length - 1));
    
    setActive(newActive);
    
    // 更新所有項目的樣式
    const items = carouselRef.current?.querySelectorAll(`.${styles.carouselItem}`);
    if (items) {
      items.forEach((item, index) => displayItems(item, index, newActive));
    }
  };

  // 點擊項目
  const handleItemClick = (index) => {
    const newProgress = (index / portfolioItems.length) * 100 + 10;
    setProgress(newProgress);
  };

  // 滾輪事件
  const handleWheel = (e) => {
    e.preventDefault();
    const speedWheel = 0.02;
    const wheelProgress = e.deltaY * speedWheel;
    setProgress(prev => prev + wheelProgress);
  };

  // 統一的事件處理器 - 處理滑鼠和觸摸事件
  const handlePointerEvent = (e, type) => {
    if (type === 'start') {
      setIsDown(true);
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      setStartX(x);
    } else if (type === 'move' && isDown) {
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const speedDrag = -0.1;
      const mouseProgress = (x - startX) * speedDrag;
      
      setProgress(prev => prev + mouseProgress);
      setStartX(x);
    } else if (type === 'end') {
      setIsDown(false);
    }
  };

  // 滑鼠事件處理器
  const handleMouseDown = (e) => handlePointerEvent(e, 'start');
  const handleMouseMove = (e) => handlePointerEvent(e, 'move');
  const handleMouseUp = () => handlePointerEvent(null, 'end');

  // 觸摸事件處理器
  const handleTouchStart = (e) => handlePointerEvent(e, 'start');
  const handleTouchMove = (e) => {
    e.preventDefault();
    handlePointerEvent(e, 'move');
  };
  const handleTouchEnd = () => handlePointerEvent(null, 'end');

  useEffect(() => {
    animate();
  }, [progress]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // 添加事件監聽器
    carousel.addEventListener('wheel', handleWheel, { passive: false });
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    carousel.addEventListener('touchend', handleTouchEnd);

    // 清理函數
    return () => {
      carousel.removeEventListener('wheel', handleWheel);
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDown, startX]);

  return (
    <div className="portfolio-carousel-container relative h-screen overflow-hidden rounded-[40px] m-5 shadow-2xl font-['Poppins']" style={{background: 'linear-gradient(135deg, #E0C3A9 0%, #D4B89A 50%, #C4A484 100%)'}}>
      <div className="carousel relative z-10 h-screen overflow-hidden pointer-events-none rounded-[40px]" ref={carouselRef}>
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            onClick={() => handleItemClick(index)}
          >
            <div className={styles.carouselBox}>
              <img src={item.src} alt={item.alt} className={styles.carouselImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

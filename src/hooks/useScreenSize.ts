import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    // Set initial width
    setScreenWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile breakpoints
  const isMobileSConstrainedView = screenWidth >= 320 && screenWidth < 360;
  const isMobileMConstrainedView = screenWidth >= 360 && screenWidth < 390;
  const isMobileLConstrainedView = screenWidth >= 390 && screenWidth < 420;
  const isMobileXLConstrainedView = screenWidth >= 420 && screenWidth < 500;
  
  // Tablet and desktop breakpoints
  const isTabletView = screenWidth >= 500 && screenWidth < 768;
  const isDesktopView = screenWidth >= 768;
  const isLargeDesktopView = screenWidth >= 1024;

  return {
    screenWidth,
    isMobileSConstrainedView,
    isMobileMConstrainedView,
    isMobileLConstrainedView,
    isMobileXLConstrainedView,
    isTabletView,
    isDesktopView,
    isLargeDesktopView
  };
}; 
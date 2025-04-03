import { useEffect } from 'react';

export const useScrollToElement = (elementId, trigger) => {
  useEffect(() => {
    if (!trigger) return;

    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const offset = isMobile ? 60 : 0; // Adjust offset for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    // Delay scroll to ensure page is fully loaded
    const timeoutId = setTimeout(scrollToElement, 500);
    return () => clearTimeout(timeoutId);
  }, [elementId, trigger]);
};
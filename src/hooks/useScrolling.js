import { useEffect } from 'react';

export const useScrollToElement = (elementId, trigger) => {
  useEffect(() => {
    if (!trigger) return;

    const scrollToElement = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const navbarHeight = 60; // Adjust this to match your navbar height

      if (isMobile) {
        // Force immediate scroll for mobile
        window.scrollTo({
          top: element.offsetTop - navbarHeight,
          behavior: 'auto' // Use 'auto' instead of 'smooth' for more reliable mobile scrolling
        });

        // Double-check scroll position after a short delay
        setTimeout(() => {
          if (window.pageYOffset !== element.offsetTop - navbarHeight) {
            window.scrollTo({
              top: element.offsetTop - navbarHeight,
              behavior: 'auto'
            });
          }
        }, 100);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Initial scroll attempt
    scrollToElement();

    // Retry scrolling a few times to ensure it works
    const retryAttempts = [100, 300, 500, 1000];
    retryAttempts.forEach(delay => {
      const timeoutId = setTimeout(scrollToElement, delay);
      return () => clearTimeout(timeoutId);
    });

  }, [elementId, trigger]);
};
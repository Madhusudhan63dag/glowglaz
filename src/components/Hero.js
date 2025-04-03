import React, { useState, useEffect } from 'react';
import banner1 from '../assets/1.jpg';
import banner3 from '../assets/3with.png';
import banner4 from '../assets/4with.png';

const Hero = () => {
  // Banner data with unique content and styling for each slide
  const banners = [
    {
      image: banner1,
      heading: "",
      subtext: "",
      buttonText: "",
      styles: {
        position: "", // left, center, right
        textAlign: "", // text alignment within the container
        headingColor: "",
        subtextColor: "",
        buttonColor: "",
        overlayColor: "",
        headingSize: "",
        containerWidth: "",
        containerPosition: "" // position of container on screen
      },
    },
    {
      image: banner3,
      heading: "NEW ARRIVALS",
      subtext: "Holistic Psoriasis Care: Ayurvedic Solutions for Healthy Skin",
      buttonText: "Show Now",
      styles: {
        position: "left", // left, center, right
        textAlign: "left", // text alignment within the container
        headingColor: "text-[#00767B] text-sm md:text-lg font-garamond",
        subtextColor: "text-gray-200 text-xl md:text-2xl lg:text-[3rem] font-playfair font-bold",
        buttonColor: "bg-[#00767B] hover:bg-brand-green/90",
        overlayColor: "from-black/60 md:from-black/40 to-transparent",
        headingSize: "",
        containerWidth: "w-full md:w-3/4 lg:w-1/2",
        containerPosition: "left-0" // position of container on screen
      }
    },
    {
      image: banner4,
      heading: "Soothe & Heal Naturally",
      subtext: "Steroid-free treatments for long-lasting relief from psoriasis symptoms",
      buttonText: "Shop Now",
      styles: {
        position: "left", // left, center, right
        textAlign: "left", // text alignment within the container
        headingColor: "text-[#DBA656] text-sm md:text-lg font-garamond",
        subtextColor: "text-gray-200 text-xl md:text-2xl lg:text-[3rem] font-playfair font-bold",
        buttonColor: "bg-[#DBA656] hover:bg-bluegray-light",
        overlayColor: "from-black/60 md:from-black/40 to-transparent",
        headingSize: "text-3xl md:text-4xl lg:text-6xl",
        containerWidth: "w-full md:w-3/4 lg:w-3/5",
        containerPosition: "left-0" // position of container on screen
      }
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentBanner = banners[currentImageIndex];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [banners.length]);

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Determine content alignment classes based on position
  const getContentAlignmentClasses = (position) => {
    switch(position) {
      case 'right':
        return 'items-center justify-end';
      case 'center':
        return 'items-center justify-center';
      default: // left
        return 'items-center justify-start';
    }
  };

  // Get text alignment class based on textAlign property
  const getTextAlignmentClass = (textAlign) => {
    switch(textAlign) {
      case 'right':
        return 'text-right';
      case 'center':
        return 'text-center';
      default: // left
        return 'text-left';
    }
  };

  return (
    <div className="relative h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      {/* Image slider */}
      {banners.map((banner, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={banner.image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover md:object-center"
            style={{ 
              objectPosition: 'center 25%', // Adjusted focal point for mobile
              objectFit: 'cover' 
            }}
          />
          
          {/* Dark overlay - darker on mobile for better text visibility */}
          <div className={`absolute inset-0 bg-gradient-to-r ${banner.styles.overlayColor} md:opacity-100 opacity-95`}></div>
        </div>
      ))}

      {/* Content overlay - moved up for better visibility on small screens */}
      <div 
        className={`absolute top-0 ${currentBanner.styles.containerPosition} ${currentBanner.styles.containerWidth} h-full flex ${getContentAlignmentClasses(currentBanner.styles.position)} z-20 px-4 pt-4 sm:pt-6 md:pt-8 md:p-12`}
      >
        <div className={`${getTextAlignmentClass(currentBanner.styles.textAlign)} max-w-full md:max-w-lg`}>
          <h1 className={`${currentBanner.styles.headingSize} ${currentBanner.styles.headingColor} mb-1 md:mb-4 transition-all duration-500`}>
            {currentBanner.heading}
          </h1>
          {/* Smaller text on mobile with better line height for readability */}
          <p className={`${currentBanner.styles.subtextColor} mb-2 md:mb-8 transition-all duration-500 leading-[1.2] sm:leading-[1.2] md:leading-[1.3] lg:leading-[1.4] text-wrap text-sm sm:text-base md:text-2xl lg:text-[3rem] line-clamp-3 sm:line-clamp-none`}>
            {currentBanner.subtext}
          </p>
          <div className={getTextAlignmentClass(currentBanner.styles.textAlign)}>
            <button className={`px-3 py-1 md:px-8 md:py-3 ${currentBanner.styles.buttonColor} text-white text-xs md:text-base rounded-full transition-all duration-300`}>
              {currentBanner.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows - hidden on small mobile, visible from sm breakpoint */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 md:p-2 z-30 hidden sm:block"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 md:p-2 z-30 hidden sm:block"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators - smaller and closer to bottom on mobile */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-brand-green w-4 md:w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
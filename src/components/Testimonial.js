import React, { useState, useEffect, useRef } from 'react';
import test1 from '../assets/test1.jpg'
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg';
import test4 from '../assets/test4.jpg';
import product1 from '../assets/oil/test1.png'
import product2 from '../assets/lotion/test1.png'
import product3 from '../assets/wash/test1.png'
import ayush from "../assets/trust/ayush.jpg"
import organic from "../assets/trust/organic.jpg"
import cruelty from "../assets/trust/cruelty.jpg"
import gmp from "../assets/trust/gmp.png"
import fba from '../assets/trust/fba.png'
import iso from '../assets/trust/iso.png'
import paraben from '../assets/trust/paraben.png'
import proven from '../assets/trust/proven.png'
import sulfate from '../assets/trust/sulfate.png'


const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const trustBadgesRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Psoriasis Patient for 10 years",
      image: test1,
      stars: 5,
      review: "As someone who has tried numerous Ayurvedic remedies for my psoriasis, PSORIGO's Body Lotion has been truly transformative. The blend of traditional herbs with modern formulation has reduced my scaling significantly. I'm finally comfortable wearing traditional Indian outfits again without worrying about my skin condition.",
      productImage: product1
    },
    {
      id: 2,
      name: "Rajesh Patel",
      position: "Using PSORIGO for 6 months",
      image: test2,
      stars: 5,
      review: "Coming from a family with Ayurvedic traditions, I was skeptical about modern psoriasis treatments. PSORIGO Oil combines the wisdom of our ancestors with scientific research. The neem and bakuchiol in the formula have significantly reduced the itching on my scalp that I've suffered with for years.",
      productImage: product2
    },
    {
      id: 3,
      name: "Dr. Anjali Desai",
      position: "Ayurvedic Practitioner",
      image: test3,
      stars: 4,
      review: "In my Ayurvedic practice, I've seen many patients with chronic skin conditions. PSORIGO's formulation excellently combines traditional herbs like neem and turmeric with modern delivery systems. I recommend these products to my patients who need relief from psoriasis symptoms while staying true to natural principles.",
      productImage: product3
    },
    {
      id: 4,
      name: "Vikram Mehta",
      position: "Using PSORIGO for 1 year",
      image: test4,
      stars: 5,
      review: "My grandmother always used natural remedies, but I needed something more effective for my psoriasis. PSORIGO Body Wash combines the best of both worlds - ancient Ayurvedic knowledge with modern skincare technology. My skin feels cleansed and soothed after every use, and the flare-ups have reduced significantly.",
      productImage: product2
    }
  ];

  // Function to render star rating
  const renderStars = (count) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < count ? 'text-amber-500' : 'text-gray-300'}`} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Next testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto slider for trust badges
  useEffect(() => {
    const badgesContainer = trustBadgesRef.current;
    if (!badgesContainer) return;
    
    // Increase scroll speed for more noticeable movement
    const scrollSpeed = 0.5;
    let animationId;
    
    // Initial position
    let scrollPosition = 0;
    
    const animate = () => {
      // Increment scroll position
      scrollPosition += scrollSpeed;
      
      // Check if we need to reset the scroll position
      // This creates a seamless infinite scroll effect
      if (scrollPosition >= badgesContainer.scrollWidth / 2) {
        scrollPosition = 0;
        badgesContainer.scrollLeft = 0;
      } else {
        badgesContainer.scrollLeft = scrollPosition;
      }
      
      // Continue animation
      animationId = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(animate);
    
    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []); // Remove scrollPosition dependency to prevent re-initializing

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            Customer Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-taupe max-w-3xl mx-auto text-lg font-garamond">
            Real stories from people who have experienced the healing benefits of our Ayurvedic PSORIGO products.
          </p>
        </div>

        {/* Testimonials slider with updated color scheme */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="md:grid md:grid-cols-2">
              {/* Image side with brand color overlay */}
              <div className="relative h-64 md:h-auto">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === activeTestimonial ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ display: index === activeTestimonial ? 'block' : 'none' }}
                  >
                    {/* Product image as background */}
                    <img 
                      src={testimonial.productImage} 
                      alt={`${testimonial.name} using product`} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with brand-inspired gradient */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-bluegray/80 to-brand-green/80 mix-blend-multiply"></div> */}
                    
                    {/* Decorative element - pattern border */}
                    {/* <div className="absolute inset-x-0 top-0 h-4 bg-brand-green opacity-70" 
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%23ffffff20' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")"
                      }}
                    ></div> */}
                    {/* <div className="absolute inset-x-0 bottom-0 h-4 bg-brand-green opacity-70" 
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%23ffffff20' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")"
                      }}
                    ></div> */}
                    
                    {/* Person image with brand-style decorative border */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-1.5 shadow-lg" style={{
                        background: "linear-gradient(45deg, #6C8299, #57982A, #6C8299, #57982A)",
                        padding: "3px"
                      }}>
                        <div className="bg-white rounded-full p-1">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Content side */}
              <div className="p-8 md:p-12 bg-white">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-opacity duration-500 ease-in-out ${
                      index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                    style={{ display: index === activeTestimonial ? 'block' : 'none' }}
                  >
                    <div className="flex items-center mb-6">
                      {renderStars(testimonial.stars)}
                    </div>
                    <blockquote className="text-xl font-garamond italic text-gray-700 mb-8 border-l-4 border-brand-green pl-4 py-1">"{testimonial.review}"</blockquote>
                    <div>
                      <h4 className="text-xl font-playfair font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-brand-green">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation buttons - styled with brand colors */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="mx-2 p-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-md hover:from-gray-100 hover:to-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bluegray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`mx-1 w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial 
                      ? 'bg-brand-green w-8' 
                      : 'bg-gray-300 hover:bg-bluegray'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="mx-2 p-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-md hover:from-gray-100 hover:to-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bluegray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Trust badges with actual certification logos */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Trusted by Ayurvedic Practitioners</h3>
            <p className="text-taupe mt-2">Our products are certified by leading Indian Ayurvedic medical associations</p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent"></div>
            
            {/* Scrolling container - removed scrollBehavior for smoother animation */}
            <div 
              ref={trustBadgesRef} 
              className="flex items-center gap-10 py-6 overflow-x-hidden whitespace-nowrap" // Increased gap and padding
            >
              {/* Double the badges for continuous scrolling effect */}
              {[...Array(2)].map((_, duplicateIndex) => (
                <React.Fragment key={duplicateIndex}>
                  {/* AYUSH Certification */}
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}> {/* Increased width and height */}
                    <img 
                      src={ayush} 
                      alt="Ministry of AYUSH Certification" 
                      className="h-20 object-contain mb-3" // Increased from h-16 to h-20 and margin
                    />
                    <span className="text-sm text-center text-bluegray font-medium">AYUSH Certified</span> {/* Increased text size */}
                  </div>
                  
                  {/* USDA Organic */}
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}> {/* Increased width and height */}
                    <img 
                      src={organic} 
                      alt="Organic Certified" 
                      className="h-20 object-contain mb-3" // Increased from h-16 to h-20 and margin
                    />
                    <span className="text-sm text-center text-bluegray font-medium">Organic Ingredients</span> {/* Increased text size */}
                  </div>
                  
                  {/* Continue with all other badges - same pattern for each */}
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={cruelty} 
                      alt="Cruelty-Free Certified" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">Cruelty-Free</span>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={gmp} 
                      alt="GMP Certified" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">GMP Certified</span>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={fba} 
                      alt="FBA Certified" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">FBA Certified</span>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={iso} 
                      alt="ISO Certified" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">ISO Certified</span>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={paraben} 
                      alt="Paraben-Free" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">Paraben-Free</span>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={proven} 
                      alt="Proven Ingredients" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">Proven Ingredients</span>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex-shrink-0 flex flex-col items-center justify-center" 
                       style={{ width: "180px", height: "150px" }}>
                    <img 
                      src={sulfate} 
                      alt="Sulfate-Free" 
                      className="h-20 object-contain mb-3"
                    />
                    <span className="text-sm text-center text-bluegray font-medium">Sulfate-Free</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
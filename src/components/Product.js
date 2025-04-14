import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useScrollToElement } from '../hooks/useScrolling';
import lotion from '../assets/lotion/one.png';
import bodyWash from '../assets/wash/one.png';
import oil from '../assets/oil/one.png';
import { useCart } from '../context/CartContext';
import offer from '../assets/offer.jpg';

const Product = () => {
  const { addToCart } = useCart();
  const productRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const shouldScrollToProducts = params.get('section') === 'products';
  
  // Add state for notification
  const [showNotification, setShowNotification] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Use the hook with immediate trigger
  useScrollToElement('products', shouldScrollToProducts);

  // Hide notification after delay
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Optional: Add analytics tracking when products section is viewed
          console.log('Products section viewed');
        }
      },
      { threshold: 0.1 }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "PSORIGO Body Lotion",
      description: "Specialized psoriasis body lotion formulated with aloe vera, almond oil, and other ayurvedic ingredients for deep hydration and symptom relief.",
      image: lotion,
      price: 1499,
      displayPrice: "₹1,499",
      benefits: ["Deep hydration", "Reduces flaking", "Soothes irritation", "Non-greasy formula"],
      ingredients: ["Aloe Vera", "Almond Oil", "Shea Butter", "Turmeric Extract"]
    },
    {
      id: 2,
      name: "PSORIGO Body Wash",
      description: "Gentle cleansing body wash with aloe vera, papaya extract, and amla to soothe and nourish psoriasis-prone skin while removing dead skin cells.",
      image: bodyWash,
      price: 1499,
      displayPrice: "₹1,499",
      benefits: ["Gentle cleansing", "Removes dead skin", "pH balanced", "Fragrance-free"],
      ingredients: ["Aloe Vera", "Papaya Extract", "Amla", "Glycerin"]
    },
    {
      id: 3,
      name: "PSORIGO Oil",
      description: "Specialized psoriasis oil with bakuchiol, neem oil, and jojoba oil to reduce itching, flaking, and redness while promoting skin healing.",
      image: oil,
      price: 1499,
      displayPrice: "₹1,499",
      benefits: ["Reduces itching", "Promotes healing", "Diminishes redness", "Fast-absorbing"],
      ingredients: ["Bakuchiol", "Neem Oil", "Jojoba Oil", "Vitamin E"]
    }
  ];

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    // Set the added product and show notification
    setAddedProduct(product);
    setShowNotification(true);
  };

  // Function to navigate to checkout
  const handleGoToCheckout = () => {
    setShowNotification(false);
    navigate('/', { state: { scrollTo: 'checkout' } });
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative" 
      id="products"
      style={{ scrollMarginTop: '60px' }}
      ref={productRef}
    >
      {/* Cart Notification Popup */}
      {showNotification && addedProduct && (
        <div className="fixed inset-x-0 top-24 mx-auto z-50 max-w-md px-4 animate-fade-slide-down">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-green-100 transform transition-all">
            <div className="h-2 bg-gradient-to-r from-brand-green to-bluegray"></div>
            <div className="p-6">
              <div className="flex items-start">
                {/* Product Image */}
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50">
                    <img 
                      src={addedProduct.image} 
                      alt={addedProduct.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-800">{addedProduct.name} added to cart!</h3>
                    <button 
                      onClick={() => setShowNotification(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mt-1">You're one step away from healthier skin!</p>
                  
                  <div className="mt-4 flex space-x-3">
                    <button 
                      onClick={handleGoToCheckout}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-brand-green to-bluegray text-white text-sm font-medium rounded-lg hover:from-brand-green hover:to-bluegray-light transition-all shadow-sm"
                    >
                      Checkout Now
                    </button>
                    <button 
                      onClick={() => setShowNotification(false)}
                      className="px-4 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">Our Premium Products</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-taupe max-w-3xl mx-auto text-lg font-garamond">
            Natural, effective solutions for psoriasis relief formulated with ayurvedic ingredients to soothe, heal, and protect your skin.
          </p>
        </div>
        
        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-transform hover:-translate-y-2 duration-300"
            >
              {/* Product Image with Overlay - Fixed aspect ratio with proper dimensions */}
              <div className="relative aspect-[3/4] overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain bg-gray-50" 
                  width={600}
                  height={800}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/600x800/f3f4f6/57982A?text=Product+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 w-full">
                    <span className="inline-block bg-brand-green text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">
                      Ayurvedic Formula
                    </span>
                  </div>
                </div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 font-bold text-bluegray shadow-md">
                    {product.displayPrice}
                  </div>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2 font-garamond">{product.description}</p>
                
                {/* Key Benefits */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-bluegray mb-2">KEY BENEFITS</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.benefits.map((benefit, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-blue-50 text-bluegray text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Ingredients */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-bluegray mb-2">KEY INGREDIENTS</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block bg-green-50 text-brand-green text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-md flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bundle Offer Section */}
        <div className="mt-16 bg-gradient-to-r from-bluegray/5 to-brand-green/5 rounded-2xl p-8 shadow-inner">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Complete PSORIGO Treatment Set</h3>
          
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Instagram-sized image for the offer */}
            <div className="w-full lg:w-1/3 aspect-square bg-white rounded-xl shadow-lg overflow-hidden relative">
              <img src={offer} />
            </div>
            
            {/* Bundle description and benefits */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Why Choose the Complete Set?</h4>
                <p className="text-gray-600 mb-6">
                  For optimal psoriasis management, our three-step system works together to cleanse, treat, and protect your skin. 
                  The Body Wash gently removes dead skin cells, the Oil provides deep healing and inflammation reduction, while the
                  Body Lotion offers lasting hydration and barrier protection.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-brand-green mb-1 text-lg">Morning</div>
                    <p className="text-sm text-gray-600">Start with Body Wash, follow with Body Lotion</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-bluegray mb-1 text-lg">Evening</div>
                    <p className="text-sm text-gray-600">Cleanse with Body Wash, apply Oil to affected areas</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-bold text-amber-600 mb-1 text-lg">Weekly</div>
                    <p className="text-sm text-gray-600">Use Oil for overnight intensive treatment</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <div className="text-gray-500 line-through text-sm">Regular Price: ₹4,497</div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-gray-800 mr-2">Bundle Price: ₹3,599</span>
                      <span className="text-brand-green font-bold">Save ₹898</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      // Add all three products to cart
                      products.forEach(product => handleAddToCart(product));
                      // You could also add a special notification here
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add Complete Bundle to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
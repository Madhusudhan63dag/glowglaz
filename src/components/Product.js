import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToElement } from '../hooks/useScrolling';
import lotion from '../assets/lotion/one.png';
import bodyWash from '../assets/wash/one.png';
import oil from '../assets/oil/one.png';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { addToCart } = useCart();
  const productRef = useRef(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const shouldScrollToProducts = params.get('section') === 'products';

  // Use the hook with immediate trigger
  useScrollToElement('products', shouldScrollToProducts);

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
      price: 1200,
      displayPrice: "₹1,200",
      benefits: ["Deep hydration", "Reduces flaking", "Soothes irritation", "Non-greasy formula"],
      ingredients: ["Aloe Vera", "Almond Oil", "Shea Butter", "Turmeric Extract"]
    },
    {
      id: 2,
      name: "PSORIGO Body Wash",
      description: "Gentle cleansing body wash with aloe vera, papaya extract, and amla to soothe and nourish psoriasis-prone skin while removing dead skin cells.",
      image: bodyWash,
      price: 1200,
      displayPrice: "₹1,200",
      benefits: ["Gentle cleansing", "Removes dead skin", "pH balanced", "Fragrance-free"],
      ingredients: ["Aloe Vera", "Papaya Extract", "Amla", "Glycerin"]
    },
    {
      id: 3,
      name: "PSORIGO Oil",
      description: "Specialized psoriasis oil with bakuchiol, neem oil, and jojoba oil to reduce itching, flaking, and redness while promoting skin healing.",
      image: oil,
      price: 750,
      displayPrice: "₹750",
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
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-gray-50 to-white" 
      id="products"
      style={{ scrollMarginTop: '60px' }} // Add inline scroll margin
      ref={productRef}
    >
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

        {/* Complete Set Recommendation Card */}
        <div className="mt-16 bg-gradient-to-r from-bluegray/5 to-brand-green/5 rounded-2xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete PSORIGO Treatment Set</h3>
              <p className="text-gray-600">
                For best results, we recommend using all three PSORIGO products together as a complete psoriasis management system.
                Save 15% when you purchase the complete set.
              </p>
            </div>
            {/* <div className="flex-shrink-0">
              <button 
                className="bg-gradient-to-r from-brand-green to-bluegray text-white py-3 px-8 rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg"
                onClick={() => {
                  // Add all products to cart
                  products.forEach(product => handleAddToCart(product));
                }}
              >
                Buy Complete Set
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
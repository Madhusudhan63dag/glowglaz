import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';

const Thank = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState({
    id: 'ORD' + Math.floor(Math.random() * 1000000),
    date: new Date().toLocaleDateString('en-IN'),
    email: ''
  });
  
  useEffect(() => {
    // Get order details from location state if available
    if (location.state && location.state.orderDetails) {
      setOrderDetails(prev => ({
        ...prev,
        ...location.state.orderDetails
      }));
    }
    
    // Fire confetti effect on load
    launchConfetti();
    
    // Scroll to top of page
    window.scrollTo(0, 0);
  }, [location]);
  
  // Function to trigger confetti effect
  const launchConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Green confetti from the right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.9, y: 0.5 },
        colors: ['#57982A', '#78B146', '#a8d868'],
        angle: randomInRange(120, 160)
      });
      
      // Blue confetti from the left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.1, y: 0.5 },
        colors: ['#6C8299', '#8199b0', '#a3b7cc'],
        angle: randomInRange(30, 70)
      });
    }, 250);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      {/* Header section with gradient background */}
      <div className="bg-gradient-to-r from-brand-green to-bluegray py-12 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-playfair font-bold text-white mb-4">Thank You for Your Order!</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-garamond">
            Your payment was successful and your order has been confirmed.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Success icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-brand-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          {/* Confirmation message */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">Order Confirmed!</h2>
            <p className="text-gray-600 max-w-lg mx-auto font-garamond">
              We're delighted to confirm your order for PSORIGO products. 
              Your journey to healthier skin begins now!
            </p>
          </div>
          
          {/* Order details */}
          <div className="mb-10 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4">Order Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">{orderDetails.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium">{orderDetails.date}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Order Confirmation</p>
                <p className="font-medium">
                  {orderDetails.email ? 
                    `Sent to ${orderDetails.email}` : 
                    'You will receive a confirmation email shortly'}
                </p>
              </div>
            </div>
          </div>
          
          {/* What happens next */}
          <div className="mb-10">
            <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4">What Happens Next?</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-bluegray text-white rounded-full flex items-center justify-center font-medium mr-3">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Order Processing</h4>
                  <p className="text-gray-600">Your order is now being processed. You will receive an email confirmation shortly.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-bluegray text-white rounded-full flex items-center justify-center font-medium mr-3">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Shipping</h4>
                  <p className="text-gray-600">Your package will be shipped within 24-48 hours. You'll receive a tracking number once it's on its way.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-bluegray text-white rounded-full flex items-center justify-center font-medium mr-3">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Delivery</h4>
                  <p className="text-gray-600">Standard delivery takes 5-7 business days, depending on your location.</p>
                </div>
              </li>
            </ol>
          </div>
          
          {/* Product usage tips */}
          <div className="mb-10 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4">Getting Started with Your Products</h3>
            <p className="text-gray-600 mb-4">
              For best results with your PSORIGO products, follow our recommended usage guidelines:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-brand-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Start with the Body Wash for gentle cleansing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-brand-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Apply Body Lotion daily for continuous moisturizing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-brand-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Use Oil treatment on affected areas as needed</span>
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="/#usage" 
                className="text-brand-green hover:text-brand-green-dark font-medium inline-flex items-center"
              >
                <span>View detailed usage instructions</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Customer support */}
          <div className="mb-10">
            <h3 className="text-xl font-playfair font-bold text-gray-800 mb-4">Need Assistance?</h3>
            <p className="text-gray-600 mb-4">
              Our customer support team is here to help with any questions about your order or products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email Support</h4>
                  <a href="mailto:israelitesshopping171@gmail.com" className="text-brand-green">israelitesshopping171@gmail.com</a>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone Support</h4>
                  <p className="text-gray-600">+91 903-052-8333</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg"
            >
              Back to Home
            </button>
            <button 
              onClick={() => navigate('/#products')}
              className="px-6 py-3 border-2 border-brand-green text-brand-green rounded-lg hover:bg-brand-green/5 transform hover:scale-105 transition-all"
            >
              Shop More Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thank;
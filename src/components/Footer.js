import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  // Add state to track image loading failures
  const [imgErrors, setImgErrors] = useState({
    razorpay: false,
    upi: false,
    visa: false,
    mastercard: false,
    amex: false
  });
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  // Handle image error properly with React state
  const handleImageError = (name) => {
    setImgErrors(prev => ({...prev, [name]: true}));
  };

  // Payment method images from reliable CDNs
  const paymentImages = {
    razorpay: "https://cdn.razorpay.com/static/assets/logo/razorpay-logo.svg",
    upi: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png",
    visa: "https://cdn.worldvectorlogo.com/logos/visa.svg",
    mastercard: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
    amex: "https://cdn.worldvectorlogo.com/logos/american-express-1.svg"
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="PSORIGO" className="h-16" />
            </div>
            <p className="text-gray-600 mb-6">
              Natural Ayurvedic solutions for psoriasis relief, combining ancient wisdom with modern science.
            </p>
            <div className="flex space-x-4">
              
              <a href=" https://www.instagram.com/glowglaz06/" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.151 0-3.501.014-4.735.069-2.275.104-3.322 1.156-3.427 3.428-.055 1.233-.069 1.584-.069 4.735s.014 3.502.069 4.735c.105 2.272 1.152 3.322 3.427 3.428 1.234.055 1.584.069 4.735.069s3.501-.014 4.734-.069c2.272-.105 3.322-1.155 3.428-3.428.055-1.233.069-1.583.069-4.735s-.014-3.502-.069-4.735c-.105-2.272-1.156-3.322-3.428-3.427-1.233-.056-1.583-.07-4.734-.07zm0 3.643c-3.315 0-6 2.685-6 6s2.685 6 6 6 6-2.685 6-6-2.685-6-6-6zm0 9.894c-2.15 0-3.894-1.744-3.894-3.894s1.744-3.894 3.894-3.894 3.894 1.744 3.894 3.894-1.744 3.894-3.894 3.894zm7.639-10.157c-.775 0-1.404.629-1.404 1.404s.629 1.404 1.404 1.404 1.404-.629 1.404-1.404-.629-1.404-1.404-1.404z"/>
                </svg>
              </a>
              
              <a href="https://www.youtube.com/@glowglaz" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-taupe hover:text-brand-green transition-colors">Home</a></li>
              <li><a href="#shop" className="text-taupe hover:text-brand-green transition-colors">Shop</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#checkout" className="text-gray-600 hover:text-blue-600 transition-colors">Checkout</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-brand-green mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-taupe">Begumpet, Hyderabad, Telangana 500016</span>
              </li>
              {/* <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">+91 98765 43210</span>
              </li> */}
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">israelitesshopping171@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-600">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          {/* <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-brand-green to-bluegray text-white px-4 py-2 rounded-r-lg hover:from-brand-green hover:to-bluegray-light transition-colors"
              >
                <span className="hidden sm:inline">Subscribe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div> */}
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PSORIGO. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-brand-green transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-brand-green transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="text-gray-500 hover:text-brand-green transition-colors">Shipping Policy</Link>
            </div>
            
            {/* Payment methods with updated images */}
            <div className="flex flex-col items-center mt-8 md:mt-0">
              <p className="text-sm text-gray-500 mb-3">Payment Methods</p>
              <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm">
                {/* Razorpay with fallback */}
                <div className="h-8 flex items-center">
                  {!imgErrors.razorpay ? (
                    <img 
                      src={paymentImages.razorpay} 
                      alt="Razorpay" 
                      className="h-6 object-contain"
                      onError={() => handleImageError('razorpay')}
                    />
                  ) : (
                    <div className="bg-blue-50 px-3 py-1 rounded-md border border-gray-200">
                      <span className="font-semibold text-blue-600">Razorpay</span>
                    </div>
                  )}
                </div>
                
                {/* UPI with fallback */}
                <div className="h-8 flex items-center">
                  {!imgErrors.upi ? (
                    <img 
                      src={paymentImages.upi}
                      alt="UPI" 
                      className="h-6 object-contain" 
                      onError={() => handleImageError('upi')}
                    />
                  ) : (
                    <div className="bg-green-50 px-3 py-1 rounded-md border border-gray-200">
                      <span className="font-semibold text-green-600">UPI</span>
                    </div>
                  )}
                </div>
                
                {/* Cash on Delivery (text-based, doesn't need image error handling) */}
                <div className="h-8 flex items-center bg-white px-3 py-1 rounded-md border border-gray-200">
                  <div className="flex items-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-600 mr-2">
                      <path d="M12 6v12m-8-6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-medium text-gray-700 text-xs">COD</span>
                  </div>
                </div>
                
                {/* Credit/Debit Cards with fallbacks */}
                <div className="flex items-center space-x-3">
                  {/* Visa */}
                  {!imgErrors.visa ? (
                    <img 
                      src={paymentImages.visa} 
                      alt="Visa"
                      className="h-6 object-contain" 
                      onError={() => handleImageError('visa')}
                    />
                  ) : (
                    <div className="bg-gray-50 px-2 py-1 rounded text-xs font-medium text-gray-600 border border-gray-200">
                      Visa
                    </div>
                  )}
                  
                  {/* Mastercard */}
                  {!imgErrors.mastercard ? (
                    <img 
                      src={paymentImages.mastercard}
                      alt="Mastercard"
                      className="h-6 object-contain" 
                      onError={() => handleImageError('mastercard')}
                    />
                  ) : (
                    <div className="bg-gray-50 px-2 py-1 rounded text-xs font-medium text-gray-600 border border-gray-200">
                      Mastercard
                    </div>
                  )}
                  
                  {/* American Express */}
                  {!imgErrors.amex ? (
                    <img 
                      src={paymentImages.amex}
                      alt="American Express"
                      className="h-6 object-contain" 
                      onError={() => handleImageError('amex')}
                    />
                  ) : (
                    <div className="bg-gray-50 px-2 py-1 rounded text-xs font-medium text-gray-600 border border-gray-200">
                      Amex
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

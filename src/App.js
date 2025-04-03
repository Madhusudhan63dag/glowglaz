import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Benfit from './components/Benfit';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Shipping from './pages/Shipping';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('section') === 'products') {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* This handles scrolling to top on page changes */}
        <ScrollHandler /> {/* Add this new component inside the Router */}
        <SectionScroller /> {/* Add this new component inside the Router */}
        <div className={`App ${navbarVisible ? 'navbar-visible' : ''}`}>
          <Navbar />
          <div className="navbar-spacer"></div>
          
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Product />
                <Benfit />
                <Testimonial />
                <Faq />
                <Checkout />
                <ContactUs />
              </>
            } />
            
            {/* Privacy Policy Route */}
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Terms & Conditions Route */}
            <Route path="/terms" element={<Terms />} />
            
            {/* Shipping Policy Route */}
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

// Add this new component within App.js
// This component uses the useScrollToSection hook and will be correctly wrapped by the Router
function SectionScroller() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a scrollTo in the location state
    if (location.state && location.state.scrollTo) {
      const { scrollTo } = location.state;
      const element = document.getElementById(scrollTo);
      
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
}

export default App;

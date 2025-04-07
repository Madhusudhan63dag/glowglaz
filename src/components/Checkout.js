import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const API_URL = 'https://razorpaybackend-wgbh.onrender.com';

const paymentImages = {
  razorpay: "https://cdn.razorpay.com/static/assets/logo/razorpay-logo.svg",
  upi: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png",
  visa: "https://cdn.worldvectorlogo.com/logos/visa.svg",
  mastercard: "https://cdn.worldvectorlogo.com/logos/mastercard-2.svg",
  amex: "https://cdn.worldvectorlogo.com/logos/american-express-1.svg",
  // Add new trust badge images
  ssl: "https://cdn.worldvectorlogo.com/logos/ssl-secure.svg",
  secure: "https://cdn.worldvectorlogo.com/logos/secure-payment.svg",
  moneyback: "https://cdn.worldvectorlogo.com/logos/money-back-guarantee.svg",
  shield: "https://cdn.worldvectorlogo.com/logos/security-shield.svg"
};

const Checkout = () => {
  // Toast notification state
  const [toast, setToast] = useState(null);
  
  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  
  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  
  // Order ID for tracking
  const [orderId, setOrderId] = useState(null);
  
  // Get cart data from context
  const { cartItems, updateQuantity, removeItem, cartTotal, clearCart } = useCart();

  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  // Calculate cart totals - removing shipping and GST charges
  const subtotal = cartTotal;
  const total = subtotal; // Total is now equal to subtotal

  // Initialize Razorpay when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Create Razorpay order
  const createRazorpayOrder = async () => {
    try {
      setIsLoading(true);
      
      // Generate a receipt ID
      const receipt = `receipt_${Date.now()}`;
      
      // Create order on the server
      const response = await axios.post(`${API_URL}/create-order`, {
        amount: total,
        currency: 'INR',
        receipt: receipt,
        notes: {
          customerName: formData.name,
          customerEmail: formData.email,
          customerPhone: formData.phone
        }
      });
      
      if (!response.data.success) {
        throw new Error('Failed to create order');
      }
      
      return response.data;
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      setToast({
        title: "Payment Error",
        description: "Could not initialize payment. Please try again.",
        type: "error"
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Open Razorpay payment modal
  const openRazorpayModal = (orderData) => {
    const options = {
      key: orderData.key,
      amount: orderData.order.amount, // Amount in paise
      currency: "INR",
      name: "PSORIGO",
      description: "Psoriasis Care Products",
      image: "/logo.png",
      order_id: orderData.order.id,
      handler: function (response) {
        handlePaymentSuccess(response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: "#57982A"
      },
      modal: {
        ondismiss: function () {
          sendAbandonedOrderEmail();
        }
      }
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  // Handle successful payment
  const handlePaymentSuccess = async (paymentResponse) => {
    try {
      setIsLoading(true);
      
      // Verify payment on the server
      const verificationResponse = await axios.post(`${API_URL}/verify-payment`, {
        razorpay_order_id: paymentResponse.razorpay_order_id,
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_signature: paymentResponse.razorpay_signature
      });
      
      if (!verificationResponse.data.success) {
        throw new Error('Payment verification failed');
      }
      
      // Set order ID for reference
      setOrderId(paymentResponse.razorpay_order_id);
      
      // Send order confirmation email
      await sendOrderConfirmationEmail(paymentResponse.razorpay_payment_id);
      
      // Show success message
      setToast({
        title: "Payment Successful!",
        description: "Your order has been placed and payment has been received.",
        type: "success"
      });
      
      // Clear cart after successful payment
      clearCart();
      
      // Reset form
      resetForm();
      
    } catch (error) {
      console.error('Error processing payment:', error);
      setToast({
        title: "Payment Error",
        description: "There was an issue with your payment. Please try again.",
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Send order confirmation email
  const sendOrderConfirmationEmail = async (paymentId) => {
    try {
      const orderDetails = {
        orderNumber: orderId || `ORD-${Date.now()}`,
        productName: cartItems.map(item => item.name).join(', '),
        quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
        totalAmount: total.toFixed(2),
        currency: 'INR',
        paymentMethod: paymentMethod === 'razorpay' ? 'Razorpay' : 'Cash on Delivery',
        paymentId: paymentId || 'COD'
      };
      
      const customerDetails = {
        firstName: formData.name.split(' ')[0],
        lastName: formData.name.split(' ').slice(1).join(' '),
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: 'India',
        zip: formData.zip
      };
      
      await axios.post(`${API_URL}/send-order-confirmation`, {
        customerEmail: formData.email,
        orderDetails,
        customerDetails
      });
      
    } catch (error) {
      console.error('Error sending order confirmation email:', error);
    }
  };

  // Send abandoned order email
  const sendAbandonedOrderEmail = async () => {
    try {
      if (!formData.email) return; // Skip if no email provided
      
      const orderDetails = {
        orderNumber: `ABANDONED-${Date.now()}`,
        productName: cartItems.map(item => item.name).join(', '),
        quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
        totalAmount: total.toFixed(2),
        currency: 'INR'
      };
      
      const customerDetails = {
        firstName: formData.name.split(' ')[0] || 'Customer',
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        email: formData.email,
        phone: formData.phone || '',
        address: formData.address || '',
        city: formData.city || '',
        state: formData.state || '',
        country: 'India',
        zip: formData.zip || ''
      };
      
      await axios.post(`${API_URL}/send-abandoned-order-email`, {
        customerEmail: formData.email,
        orderDetails,
        customerDetails
      });
      
    } catch (error) {
      console.error('Error sending abandoned order email:', error);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: '',
    });
  };

  // Process COD order
  const processCashOnDelivery = async () => {
    try {
      setIsLoading(true);
      
      // Generate an order ID for COD
      const codOrderId = `COD-${Date.now()}`;
      setOrderId(codOrderId);
      
      // Send order confirmation email
      await sendOrderConfirmationEmail();
      
      // Show success message
      setToast({
        title: "Order Placed Successfully!",
        description: "Your order will be delivered and payment will be collected on delivery.",
        type: "success"
      });
      
      // Clear cart after successful order
      clearCart();
      
      // Reset form
      resetForm();
      
    } catch (error) {
      console.error('Error processing COD order:', error);
      setToast({
        title: "Order Error",
        description: "There was an issue placing your order. Please try again.",
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate cart is not empty
    if (cartItems.length === 0) {
      setToast({
        title: "Empty Cart",
        description: "Please add items to your cart before checkout.",
        type: "error"
      });
      return;
    }
    
    try {
      if (paymentMethod === 'razorpay') {
        // Process payment with Razorpay
        const orderData = await createRazorpayOrder();
        if (orderData) {
          openRazorpayModal(orderData);
        }
      } else if (paymentMethod === 'cod') {
        // Process Cash on Delivery order
        await processCashOnDelivery();
      }
      
    } catch (error) {
      console.error('Error during checkout:', error);
      setToast({
        title: "Checkout Error",
        description: "An unexpected error occurred. Please try again.",
        type: "error"
      });
    }
  };

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section id="checkout" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-50 border-l-4 ${
          toast.type === 'error' ? 'border-red-500' : 'border-brand-green'
        } animate-fade-in`}>
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className={`h-5 w-5 ${toast.type === 'error' ? 'text-red-500' : 'text-brand-green'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                {toast.type === 'error' ? (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                )}
              </svg>
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${toast.type === 'error' ? 'text-red-800' : 'text-green-800'}`}>{toast.title}</h3>
              <div className="mt-1 text-sm text-gray-600">{toast.description}</div>
            </div>
            <div className="ml-auto pl-3">
              <button 
                className="-mx-1.5 -my-1.5 rounded-md p-1.5 text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={() => setToast(null)}
              >
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
            <svg className="animate-spin h-10 w-10 text-brand-green mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-700">Processing your order...</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            Complete Your Order
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
            Experience the healing benefits of PSORIGO's specialized psoriasis care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Cart Summary */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Your Cart</h3>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Your cart is empty</p>
                <a 
                  href="#products" 
                  className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transition-all"
                >
                  Browse Products
                </a>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div className="flex items-center flex-1">
                        {item.image && (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                        )}
                        <div>
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-600">₹{item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <button 
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        
                        <span className="w-10 text-center text-gray-800">{item.quantity}</span>
                        
                        <button 
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        
                        <button 
                          className="ml-4 text-red-500 hover:text-red-700"
                          onClick={() => removeItem(item.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Cart Summary */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800 pt-2 border-t border-gray-100">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="flex gap-2 mb-4">
                  <input 
                    type="text"
                    placeholder="Promo code" 
                    className="w-full flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Apply
                  </button>
                </div>
                
                {/* Benefits */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Every Purchase Includes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      15-day money-back guarantee
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Detailed usage instructions
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          
          {/* Checkout Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Shipping & Payment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Contact Information</h4>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Information */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Shipping Address</h4>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                    <input 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input 
                        id="city" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                      <input 
                        id="state" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                    <input 
                      id="zip" 
                      name="zip" 
                      value={formData.zip} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                    />
                  </div>
                </div>
              </div>
              
              {/* Payment Method Selection */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Payment Method</h4>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex space-x-4">
                    {/* Razorpay Option */}
                    <div 
                      className={`flex-1 border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'razorpay' 
                          ? 'border-brand-green bg-green-50' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                      onClick={() => setPaymentMethod('razorpay')}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="font-medium">Razorpay</div>
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          checked={paymentMethod === 'razorpay'} 
                          onChange={() => setPaymentMethod('razorpay')}
                          className="h-4 w-4 text-brand-green focus:ring-brand-green"
                        />
                      </div>
                      <div className="text-sm text-gray-600">Pay securely with Credit Card, Debit Card, Net Banking, UPI, or Wallets</div>
                      <div className="mt-2 flex items-center">
                        <img 
                          src={paymentImages.razorpay} 
                          alt="Razorpay" 
                          className="h-6 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="mt-2 flex items-center space-x-2">
                        <img 
                          src={paymentImages.visa} 
                          alt="Visa" 
                          className="h-5 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                          }}
                        />
                        <img 
                          src={paymentImages.mastercard} 
                          alt="Mastercard" 
                          className="h-5 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                          }}
                        />
                        <img 
                          src={paymentImages.upi} 
                          alt="UPI" 
                          className="h-5 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Cash on Delivery Option */}
                    <div 
                      className={`flex-1 border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'cod' 
                          ? 'border-brand-green bg-green-50' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="font-medium">Cash on Delivery</div>
                        <input 
                          type="radio" 
                          name="paymentMethod" 
                          checked={paymentMethod === 'cod'} 
                          onChange={() => setPaymentMethod('cod')}
                          className="h-4 w-4 text-brand-green focus:ring-brand-green"
                        />
                      </div>
                      <div className="text-sm text-gray-600">Pay when your order is delivered</div>
                      <div className="mt-2 flex items-center">
                        <div className="flex items-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-600 mr-2">
                            <path d="M12 6v12m-8-6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span className="text-sm font-medium text-gray-700">Cash on Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || cartItems.length === 0}
              >
                {isLoading ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order (COD)' : 'Proceed to Pay'}
              </button>
              
              {/* Trust Badges Section */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-600">Secure Payment</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-600">SSL Encrypted</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-600">Easy Returns</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-gray-600">24/7 Support</p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-center text-gray-600 mt-4">
                By placing your order, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
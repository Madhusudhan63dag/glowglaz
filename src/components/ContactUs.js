import React, { useState } from 'react';

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Form submission and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    // Don't prevent default - allow the form to submit naturally to FormSubmit
    // But we will show the loading state and success message
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    
    // We'll use setTimeout to show the loading state briefly
    // FormSubmit will handle the actual submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form only after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  // Company information
  const companyInfo = {
    address: 'Begumpet, Hyderabad, Telangana 500016',
    email: 'israelitesshopping171@gmail.com',
    phone: '+91 903-052-8333',
    hours: 'Mon-Fri: 9AM - 6PM'
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-taupe max-w-3xl mx-auto text-lg font-garamond">
            Have questions about our products or need personalized advice for your skin? We're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-playfair font-bold mb-6 text-gray-800">Send Us a Message</h3>
            
            {submitSuccess && (
              <div className="mb-6 bg-green-50 border-l-4 border-brand-green p-4 rounded">
                <p className="text-brand-green font-medium">Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-500 font-medium">{submitError}</p>
              </div>
            )}
            
            {/* Updated form with FormSubmit integration */}
            <form 
              action={`https://formsubmit.co/${companyInfo.email}`} 
              method="POST"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit configuration fields */}
              <input type="hidden" name="_subject" value="New PSORIGO Website Contact" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="text" name="_honey" style={{display: 'none'}} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input 
                    id="phone" 
                    name="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
                  <input 
                    id="subject" 
                    name="subject" 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                We respect your privacy and will respond within 24-48 hours.
              </p>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-md p-2 h-64 md:h-80 mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60890.68830571464!2d78.42771972276038!3d17.43508774681376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913f5c65d7b1%3A0x9ef37a0faa42ba54!2sBegumpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1702592538519!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.75rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
            
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-gray-800">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600 font-garamond">{companyInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-bluegray/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bluegray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                    <a 
                      href={`mailto:${companyInfo.email}`} 
                      className="text-gray-600 font-garamond hover:text-brand-green transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Phone</h4>
                    <a 
                      href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} 
                      className="text-gray-600 font-garamond hover:text-brand-green transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-bluegray/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bluegray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600 font-garamond">{companyInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-bluegray-light/10 rounded-2xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Have General Questions?</h3>
              <p className="text-gray-600">
                Check out our FAQ section for answers to the most commonly asked questions.
              </p>
            </div>
            <div>
              <a 
                href="#faq" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg"
              >
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

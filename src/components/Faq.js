import React, { useState } from 'react';

const Faq = () => {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(null);

  // Toggle function for accordion items
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes PSORIGO different from other psoriasis products?",
      answer: "PSORIGO is formulated with Ayurvedic ingredients that have been used for centuries to treat skin conditions. Our products combine these traditional ingredients with modern skincare science to create effective formulations that are gentle on sensitive, psoriasis-prone skin without harsh chemicals."
    },
    {
      question: "How soon can I expect to see results?",
      answer: "Most users report noticeable improvements within 2-3 weeks of consistent use. However, everyone's skin is different, and results may vary. For best results, we recommend using PSORIGO products daily as directed."
    },
    {
      question: "Can I use PSORIGO products if I have other skin conditions?",
      answer: "PSORIGO products are formulated specifically for psoriasis-prone skin but may also benefit those with dry, sensitive, or irritated skin. If you have other skin conditions, we recommend consulting with a dermatologist before use."
    },
    {
      question: "Are PSORIGO products suitable for all skin types?",
      answer: "Yes, our products are formulated to be gentle and suitable for all skin types, including sensitive skin. However, as with any skincare product, we recommend doing a patch test before full application."
    },
    {
      question: "Do PSORIGO products contain steroids or harsh chemicals?",
      answer: "No, PSORIGO products do not contain steroids. They are formulated with natural Ayurvedic ingredients and are free from harsh chemicals that can irritate sensitive skin."
    },
    {
      question: "How should I store PSORIGO products?",
      answer: "For optimal potency and shelf life, store PSORIGO products in a cool, dry place away from direct sunlight. There's no need for refrigeration."
    }
  ];

  // FAQ section images
  const images = [
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556228578-8d91f91df7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-taupe max-w-3xl mx-auto text-lg">
            Find answers to common questions about PSORIGO products and their usage.
          </p>
        </div>
        
        <div className="">
          {/* FAQ Accordion */}
          <div className="">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 border-b border-gray-200 pb-4 last:border-b-0"
              >
                <button
                  className="w-full flex justify-between items-center text-left font-semibold text-lg text-taupe hover:text-brand-green focus:outline-none transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  {faq.question}
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === index ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Column */}
          
        </div>

        {/* CTA Banner */}
        {/* <div className="mt-16 bg-gradient-to-r from-gray-50 to-bluegray-light/10 rounded-2xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Still have questions?</h3>
              <p className="text-gray-600">
                Our skin experts are ready to help with personalized advice for your skin concerns.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white border border-brand-green text-brand-green py-3 px-8 rounded-lg hover:bg-gray-50 transition-all">
                Chat Now
              </button>
              <button className="bg-gradient-to-r from-brand-green to-bluegray text-white py-3 px-8 rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Faq;
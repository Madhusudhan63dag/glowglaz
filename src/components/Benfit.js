import React from 'react';

const Benfit = () => {
  const benefits = [
    {
      title: "Relieves Psoriasis Symptoms",
      description: "Our formulations help reduce redness, itching, and flaking associated with psoriasis.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Anti-Inflammatory Properties",
      description: "Ayurvedic ingredients work to reduce inflammation and soothe irritated skin.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Deep Hydration",
      description: "Natural oils and extracts provide lasting moisture to dry, psoriasis-prone skin.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      title: "Removes Dead Skin Cells",
      description: "Gently exfoliates to remove flaky skin and promote skin regeneration.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" />
        </svg>
      ),
    },
    {
      title: "Promotes Skin Regeneration",
      description: "Helps speed up the skin renewal process for healthier skin.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "100% Ayurvedic Formulation",
      description: "Made with time-tested Ayurvedic ingredients with proven benefits for skin health.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
    },
  ];

  const ingredients = [
    { name: "Aloe Vera", description: "Soothes and hydrates skin" },
    { name: "Bakuchiol", description: "Anti-inflammatory and anti-psoriatic properties" },
    { name: "Neem", description: "Natural antibacterial and anti-inflammatory" },
    { name: "Almond Oil", description: "Deep moisturization and nourishment" },
    { name: "Ashwagandha", description: "Reduces stress-related skin issues" },
    { name: "Amla", description: "Rich in antioxidants for skin health" },
    { name: "Hibiscus", description: "Natural exfoliant and skin rejuvenator" },
    { name: "Jojoba Oil", description: "Balances oil production and soothes skin" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            Benefits & Ingredients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-taupe max-w-3xl mx-auto text-lg">
            PSORIGO products combine the power of Ayurvedic medicine with modern skincare science to provide relief for psoriasis-prone skin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Benefits Column */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">Key Benefits</h3>
            <div className="grid gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex group">
                  <div className="mr-6 text-brand-green group-hover:text-bluegray transition-colors">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients Column */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">Key Ingredients</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="w-2 h-10 bg-gradient-to-b from-brand-green to-bluegray rounded-full mr-4"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{ingredient.name}</h4>
                      <p className="text-gray-600 text-sm">{ingredient.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Natural Ingredients Banner */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-bluegray-light/10 rounded-2xl p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Natural Ayurvedic Ingredients</h3>
              <p className="text-gray-600">
                Our products are crafted with natural ingredients that have been trusted in Ayurvedic medicine for centuries.
                Free from harsh chemicals, steroids, and artificial fragrances.
              </p>
            </div>
            {/* <div className="flex-shrink-0">
              <button className="bg-gradient-to-r from-brand-green to-bluegray text-white py-3 px-8 rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benfit;
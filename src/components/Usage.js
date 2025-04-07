import React, { useState } from 'react';
import lotion from '../assets/lotion/one.png';
import bodyWash from '../assets/wash/one.png';
import oil from '../assets/oil/one.png';

const Usage = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      name: "PSORIGO Body Lotion",
      image: lotion,
      steps: [
        "Clean the affected area thoroughly and pat dry",
        "Take a small amount of lotion and apply gently in circular motions",
        "Use twice daily, morning and evening",
        "Best applied after shower when skin is slightly damp"
      ],
      tips: "For best results, use consistently for at least 4-6 weeks. Can be applied to any affected area except face.",
      timing: "Morning and Evening",
      duration: "2-3 minutes"
    },
    {
      name: "PSORIGO Oil",
      image: oil,
      steps: [
        "Warm the oil slightly by rubbing between palms",
        "Gently massage into affected areas in circular motions",
        "Leave on for at least 30 minutes or overnight",
        "For scalp psoriasis, massage into scalp and leave overnight"
      ],
      tips: "For intensive treatment, apply before bedtime and leave overnight. Use a shower cap for scalp application.",
      timing: "Preferably Evening/Night",
      duration: "5-10 minutes application + 30+ minutes absorption"
    },
    {
      name: "PSORIGO Body Wash",
      image: bodyWash,
      steps: [
        "Wet the affected area with warm water",
        "Apply body wash and lather gently",
        "Leave the lather on for 1-2 minutes",
        "Rinse thoroughly with warm water"
      ],
      tips: "Use lukewarm water, not hot, as hot water can irritate psoriasis. Pat dry gently, don't rub.",
      timing: "During shower/bath",
      duration: "3-5 minutes"
    }
  ];

  return (
    <section id="usage" className="py-10 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            How to Use PSORIGO Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-120px)]">
          {/* Product Images Column */}
          <div className="lg:w-1/3 flex flex-col gap-4 h-full overflow-y-auto pr-2">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 flex-shrink-0 h-[200px] ${
                  activeProduct === index 
                    ? 'scale-[1.02] shadow-xl border-2 border-brand-green' 
                    : 'hover:scale-[1.02] shadow-md'
                }`}
                onClick={() => setActiveProduct(index)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain bg-gray-50 p-4"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent/20 transition-opacity ${
                  activeProduct === index ? 'opacity-70' : 'opacity-40'
                }`}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-bold">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Usage Instructions Column - Scrollable if content overflows */}
          <div className="lg:w-2/3 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {products[activeProduct].name}
                </h3>

                {/* Time Details */}
                <div className="flex justify-between mb-8 text-sm text-gray-600 bg-gray-50 rounded-lg p-4">
                  <div>
                    <span className="font-semibold">Best Time:</span><br/>
                    {products[activeProduct].timing}
                  </div>
                  <div>
                    <span className="font-semibold">Duration:</span><br/>
                    {products[activeProduct].duration}
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Application Steps:</h4>
                  <ol className="space-y-4">
                    {products[activeProduct].steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green text-white text-lg flex items-center justify-center mr-4">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tips */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-bluegray mb-3">Pro Tips:</h4>
                  <p className="text-gray-700">{products[activeProduct].tips}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">General Best Practices</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-4">Do's:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Perform a patch test before first use</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Use products consistently for best results</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-brand-green mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Keep affected areas clean and moisturized</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-4">Don'ts:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Don't use hot water on affected areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Avoid scratching or rubbing affected areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-600">Don't mix with other medicated products without consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Approaches Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Treatment Approaches with PSORIGO Products</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-r border-gray-200 pr-8">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Daily Maintenance</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Morning: PSORIGO Body Wash followed by Body Lotion
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Evening: Gentle cleansing with Body Wash
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Night: PSORIGO Oil treatment before bed
                  </li>
                </ul>
              </div>
              <div className="pl-8">
                <h4 className="text-xl font-bold mb-4 text-gray-800">For Flare-ups</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Increase PSORIGO Oil application to twice daily
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Apply Body Lotion more frequently throughout the day
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Extended Body Wash soaking for 2-3 minutes
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Combination Tips */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-bluegray">Recommended Product Combinations</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-brand-green mb-2">Mild Symptoms</h5>
                  <p className="text-sm text-gray-600">Body Wash + Body Lotion for daily maintenance</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-brand-green mb-2">Moderate Symptoms</h5>
                  <p className="text-sm text-gray-600">All three products with weekly oil treatments</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-brand-green mb-2">Severe Symptoms</h5>
                  <p className="text-sm text-gray-600">Daily use of all products with overnight oil application</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;

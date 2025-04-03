import React from 'react';
import about from '../assets/about.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  // Key points about why to use the product
  const keyPoints = [
    {
      title: "Ayurvedic Wisdom",
      description: "PSORIGO formulations are based on centuries-old Ayurvedic knowledge that has effectively treated skin conditions through natural ingredients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
    },
    {
      title: "Steroid-Free Relief",
      description: "Unlike many conventional psoriasis treatments, PSORIGO products are completely free from steroids, offering gentle but effective relief without the associated side effects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Natural Ingredients",
      description: "Each product contains powerful natural ingredients like neem, bakuchiol, turmeric, and aloe vera that work synergistically to soothe irritated skin and reduce psoriasis symptoms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Multi-Pronged Approach",
      description: "PSORIGO offers a complete product line that works together to address different aspects of psoriasis: cleansing, moisturizing, and healing for a comprehensive treatment regimen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
  ];

  // Psoriasis statistics for India
  const statistics = [
    { value: "2-3%", label: "of Indians affected by psoriasis" },
    { value: "80%", label: "report significant quality of life impact" },
    { value: "60%", label: "experience flare-ups from conventional products" },
    { value: "85%", label: "found relief with traditional remedies" }
  ];

  // Image URLs for different sections
  const images = {
    // Main about section image

    aboutImage: about,

    // Science behind section image
    scienceImage: about2,
    
    // Key ingredients images
    ingredients: [
      {
        name: "Neem",
        image: "https://img.freepik.com/free-photo/neem-leaves-bottle-oil_74855-434.jpg",
        description: "Known for its antibacterial and anti-inflammatory properties"
      },
      {
        name: "Turmeric",
        image: "https://img.freepik.com/free-photo/turmeric-powder-wooden-bowl-table_1150-44353.jpg", 
        description: "Contains curcumin, which helps reduce inflammation"
      },
      {
        name: "Aloe Vera",
        image: "https://img.freepik.com/free-photo/aloe-vera-wooden-table_144627-23173.jpg",
        description: "Soothes and hydrates irritated skin"
      },
      {
        name: "Bakuchiol",
        image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9",
        description: "Natural alternative to retinol with anti-inflammatory properties"
      }
    ]
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-bluegray">
            Why Choose PSORIGO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green to-bluegray mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-taupe max-w-3xl mx-auto text-lg font-garamond">
            Our Ayurvedic approach to psoriasis combines ancient wisdom with modern science for effective, gentle relief without harsh chemicals.
          </p>
        </div>

        {/* About Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Column */}
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <img
              src={images.aboutImage}
              alt="PSORIGO Ayurvedic Products"
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1624385392440-e5a97563cc08";
              }}
            />
          </div>

          {/* Content Column */}
          <div>
            <h3 className="text-3xl font-playfair font-bold mb-6 text-gray-800">Our Approach to Psoriasis Management</h3>
            <p className="text-gray-600 mb-6 font-garamond">
              At PSORIGO, we understand the physical and emotional toll that psoriasis can take on individuals. Our products are born from the ancient wisdom of Ayurveda, refined through modern scientific processes to create effective, natural solutions for psoriasis management.
            </p>
            <p className="text-gray-600 mb-8 font-garamond">
              Each PSORIGO product is carefully formulated with potent Ayurvedic herbs and natural ingredients known for their skin-healing properties. We avoid harsh chemicals, artificial fragrances, and steroids that can damage sensitive skin and cause long-term side effects.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <div className="text-2xl font-bold text-brand-green">{stat.value}</div>
                  <div className="text-sm text-taupe">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex">
              <a
                href="#products"
                className="px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-2 bg-gradient-to-r from-brand-green to-bluegray"></div>
              <div className="p-6">
                <div className="text-brand-green mb-4">{point.icon}</div>
                <h3 className="text-xl font-playfair font-bold mb-3 text-gray-800">{point.title}</h3>
                <p className="text-gray-600 font-garamond">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Science Behind Section */}
        <div className="bg-bluegray/5 rounded-2xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-6 text-gray-800">The Science Behind PSORIGO</h3>
              <p className="text-gray-600 mb-4 font-garamond">
                PSORIGO products combine time-tested Ayurvedic ingredients with modern dermatological science. Our formulations are based on clinical research into natural compounds that effectively address the symptoms of psoriasis.
              </p>
              <p className="text-gray-600 mb-6 font-garamond">
                Key active ingredients like neem, turmeric, and aloe vera have been scientifically proven to reduce inflammation, soothe irritation, and promote skin healing – all crucial factors in managing psoriasis symptoms.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-10 bg-gradient-to-b from-brand-green to-bluegray rounded-full mr-4 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-playfair">Anti-Inflammatory Properties</h4>
                    <p className="text-gray-600 text-sm font-garamond">Natural compounds like curcumin (from turmeric) and azadirachtin (from neem) help reduce the inflammation associated with psoriasis plaques.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-10 bg-gradient-to-b from-brand-green to-bluegray rounded-full mr-4 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-playfair">Cell Regulation</h4>
                    <p className="text-gray-600 text-sm font-garamond">Bakuchiol and other botanical extracts help normalize skin cell production, addressing the accelerated cell turnover that characterizes psoriasis.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-10 bg-gradient-to-b from-brand-green to-bluegray rounded-full mr-4 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 font-playfair">Moisture Barrier Support</h4>
                    <p className="text-gray-600 text-sm font-garamond">Natural oils and humectants work to repair and strengthen the skin's moisture barrier, which is often compromised in psoriasis patients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={images.scienceImage}
                alt="The Science of Ayurveda"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1577368211130-4bbd0181c563";
                }}
              />
            </div>
          </div>
        </div>

        {/* Testimonial Highlight */}
        <div className="text-center">
          <h3 className="text-3xl font-playfair font-bold mb-8 text-gray-800">Real Results for Real People</h3>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 border-l-8 border-brand-green">
            <blockquote className="text-xl font-garamond italic text-gray-700 mb-6">
              "After years of struggling with prescription medications and their side effects, discovering PSORIGO's natural approach was life-changing. The Oil and Body Lotion combination has reduced my flare-ups by almost 80%, and for the first time in decades, I feel comfortable in my own skin."
            </blockquote>
            <div className="flex justify-center items-center">
              <div className="font-bold text-gray-800 font-playfair">Arjun M.</div>
              <span className="mx-2 text-gray-400">|</span>
              <div className="text-brand-green font-garamond">Psoriasis patient for 25+ years</div>
            </div>
            <div className="mt-6">
              <a
                href="#testimonials"
                className="inline-flex items-center text-bluegray hover:text-brand-green transition-colors"
              >
                <span className="font-garamond">Read More Success Stories</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

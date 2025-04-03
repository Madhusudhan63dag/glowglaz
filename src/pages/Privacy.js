import React from 'react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      {/* Header section with gradient background */}
      <div className="bg-gradient-to-r from-brand-green to-bluegray py-12 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-playfair font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/80 max-w-2xl mx-auto font-garamond">
            This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-gray-500 mb-4">Last Updated: December 2024</p>
            
            <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4 font-garamond">
              This Privacy Policy describes how Sampoorna Arogya collects, uses, and discloses your information when you use our website.
            </p>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Personal Information:</h3>
              <p className="text-gray-600">
                This includes information that can be used to identify you, such as your name, billing address, shipping address, email address, and phone number. You only provide this information when you contact us through a form on the Site.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Non-Personal Information:</h3>
              <p className="text-gray-600">
                This includes information that cannot be used to identify you, such as your browser type, operating system, IP address, browsing activity on the Site, and demographic information (e.g., age, gender). This information is collected automatically when you visit the Site.
              </p>
            </div>
          </div>

          {/* Rest of the privacy policy sections */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Personal Information:</h3>
              <p className="text-gray-600">
                We will only use your personal information to respond to inquiries and requests. We will not share your personal information with any third parties without your consent, except as required by law.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Non-Personal Information:</h3>
              <p className="text-gray-600">
                We use non-personal information to improve the Site and understand how users interact. We may also use non-personal information for internal marketing and promotional purposes.
              </p>
            </div>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We may use cookies and other tracking technologies to collect non-personal information about your use of the Site. Cookies are small data files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences over time.
            </p>
            <p className="text-gray-600 mb-4">
              If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
            </p>
            <p className="text-gray-600 mb-4">
              When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
            </p>
            <p className="text-gray-600">
              If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Service Providers</h2>
            <p className="text-gray-600">
              We may use third-party service providers to help us operate the Site and deliver our services. These service providers may have access to your non-personal information. We will not share your personal information with any third-party service providers for their marketing purposes without your consent.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Security</h2>
            <p className="text-gray-600">
              We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              The Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us. We will take steps to remove the information from our records.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will post any changes on the Site. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices.
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/')}
              className="inline-block px-6 py-3 bg-gradient-to-r from-brand-green to-bluegray text-white rounded-lg hover:from-brand-green hover:to-bluegray-light transform hover:scale-105 transition-all shadow-lg"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

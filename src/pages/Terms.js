import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      {/* Header section with gradient background */}
      <div className="bg-gradient-to-r from-brand-green to-bluegray py-12 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-gray-500 mb-4">Last Updated: December 2024</p>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Sampoorn Arogya!</h2>
            <p className="text-gray-600 mb-4">
              These terms and conditions outline the rules and regulations for the use of Sampoorn Arogya Website. 
              By accessing this website we assume you accept these terms and conditions. Do not continue to use 
              Sampoorn Arogya if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Terminology</h2>
            <p className="text-gray-600 mb-4">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer 
              Notice, and all Agreements: "Client", "You" and "Your" refers to you, the person who logs on to 
              this website and is compliant with the Company's terms and conditions. "The Company", "Ourselves", 
              "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the 
              Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment 
              necessary to undertake the process of our assistance to the Client most appropriately for the 
              express purpose of meeting the Client's needs in respect of the provision of the Company's stated 
              services, by and subject to, prevailing law of in. Any use of the above terminology or other words 
              in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and 
              therefore as referring to the same.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-4">
              We employ the use of cookies. By accessing Sampoorn Arogya, you agree to use cookies in agreement 
              with Sampoorn Arogya's Privacy Policy. Most interactive websites use cookies to let us retrieve the 
              user's details for each visit. Cookies are used by our website to enable the functionality of certain 
              areas to make it easier for people visiting our website. Some of our affiliate/advertising partners 
              may also use cookies.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4">
              Unless otherwise stated, Sampoorn Arogya and/or its licensors own the intellectual property rights 
              for all material on Sampoorn Arogya. All intellectual property rights are reserved. You may access 
              this from Sampoorn Arogya for your personal use subject to restrictions set in these terms and 
              conditions.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">You Must Not</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
              <li>Republish material from Sampoorn Arogya</li>
              <li>Sell, rent, or sub-license material from Sampoorn Arogya</li>
              <li>Reproduce, duplicate, or copy material from Sampoorn Arogya</li>
              <li>Redistribute content from Sampoorn Arogya</li>
            </ul>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Comments</h2>
            <p className="text-gray-600 mb-4">
              Parts of this website offer an opportunity for users to post and exchange opinions and information 
              in certain areas of the website. Sampoorn Arogya does not filter, edit, publish, or review Comments 
              before their presence on the website. Comments do not reflect the views and opinions of Sampoorn 
              Arogya, its agents, and/or affiliates. Comments reflect the views and opinions of the person who 
              posts their views and opinions. To the extent permitted by applicable laws, Sampoorn Arogya shall 
              not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a 
              result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">External Links</h2>
            <p className="text-gray-600 mb-4">
              We shall not be held responsible for any content that appears on your Website. You agree to protect 
              and defend us against all claims that are arising on your Website. No link(s) should appear on any 
              Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise 
              violates, or advocates the infringement or other violation of, any third-party rights.
            </p>
          </div>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Modifications</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these terms at any time. Continued use of our services constitutes 
              acceptance of any changes.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600 mb-4">
              For any questions regarding our terms, please contact <a href="mailto:israelitesshopping171@gmail.com" className="text-brand-green hover:underline">israelitesshopping171@gmail.com</a>
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

export default Terms;

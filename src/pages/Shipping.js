import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      {/* Header section with gradient background */}
      <div className="bg-gradient-to-r from-brand-green to-bluegray py-12 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Shipping Policy</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Information about our shipping methods, timelines, and procedures.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-gray-500 mb-4">Last Updated: December 2024</p>
          </div>

          {/* 1. Shipping Coverage */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Shipping Coverage</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Domestic Shipping</h3>
              <p className="text-gray-600 mb-2">
                We deliver to all major cities and towns across India. Pin code verification is available at checkout. 
                Remote locations may require additional delivery time. Certain restricted areas may not be serviceable.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">International Shipping</h3>
              <p className="text-gray-600">
                We are happy to offer international shipping to customers worldwide. Our goal is to deliver your order 
                as quickly and efficiently as possible, no matter where you are.
              </p>
            </div>
          </div>

          {/* 2. Shipping Methods */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Shipping Methods</h2>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Standard Delivery</h3>
              <p className="text-gray-600">
                Delivery within 5–7 business days. Available across all serviceable locations.
              </p>
            </div>
          </div>

          {/* 3. Shipping Partners */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Shipping Partners</h2>
            <p className="text-gray-600 mb-2">We work with reputed courier partners, including:</p>
            
            <ul className="list-disc pl-6 text-gray-600">
              <li>Aramex</li>
              <li>DHL</li>
              <li>Blue Dart</li>
              <li>DTDC</li>
            </ul>
          </div>

          {/* 4. Order Processing */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Order Processing</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Processing Time</h3>
              <p className="text-gray-600">
                Orders are processed within 24 hours of placement. Order confirmation is sent via email. 
                Bulk orders may require additional processing time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Order Tracking</h3>
              <p className="text-gray-600">
                A tracking number is provided via email. Customer service assistance is available for tracking queries.
              </p>
            </div>
          </div>

          {/* 5. Delivery Guidelines */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Delivery Guidelines</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Delivery Attempts</h3>
              <p className="text-gray-600">
                A maximum of 3 delivery attempts will be made. Delivery reattempts are scheduled within 24 hours. 
                Customers will be notified before each delivery attempt. Orders returned to the seller after 3 
                failed attempts may incur reshipping fees. Refunds will be processed for the product price, 
                excluding initial shipping charges.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Delivery Verification</h3>
              <p className="text-gray-600">
                Valid ID proof may be required for specific items. Digital signature capture is required at delivery. 
                Unattended delivery is not permitted.
              </p>
            </div>
          </div>

          {/* 6. Special Cases */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Special Cases</h2>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Bulk Orders</h3>
              <p className="text-gray-600">
                Special shipping arrangements are available for bulk orders. Custom delivery timelines can be 
                discussed with our team. Additional handling charges may apply.
              </p>
            </div>
          </div>

          {/* 7. Shipping Restrictions */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Shipping Restrictions</h2>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Weather Conditions</h3>
              <p className="text-gray-600">
                Delivery times may be affected during severe weather conditions, natural disasters, or local disturbances. 
                In such cases, orders will be rescheduled, and customers will be notified with updated timelines.
              </p>
            </div>
          </div>

          {/* 8. Lost or Damaged Shipments */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Lost or Damaged Shipments</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Lost Packages</h3>
              <p className="text-gray-600">
                Investigations are initiated within 24 hours of receiving a complaint. Regular updates will be provided 
                to the customer. Refunds or resolutions are provided within 15 business days for eligible cases, 
                including the full product and shipping cost.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Damaged Packages</h3>
              <p className="text-gray-600">
                Refuse delivery if external damage is visible. Report damage within 24 hours of delivery with photo 
                documentation. Replacement or refunds are processed after an investigation.
              </p>
            </div>
          </div>

          {/* 9. Holiday Shipping */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Holiday Shipping</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-bluegray mb-2">Peak Seasons</h3>
              <p className="text-gray-600">
                Processing times may be extended during festivals and peak seasons. We recommend additional delivery 
                buffer time during these periods. Customers will be notified of any delays.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Order processing: Monday to Sunday, 9 AM to 6 PM IST. Customer service is available: Monday to Saturday, 
                9 AM to 8 PM IST.
              </p>
            </div>
          </div>

          {/* 10. Environmental Commitment */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Environmental Commitment</h2>
            
            <div>
              <h3 className="text-lg font-semibold text-bluegray mb-2">Packaging</h3>
              <p className="text-gray-600">
                We use eco-friendly packaging materials with minimal plastic usage. Packaging materials are made from 
                recycled sources where possible. We ensure right-sized packaging to reduce waste.
              </p>
            </div>
          </div>

          {/* 11. Communication */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Communication</h2>
            <p className="text-gray-600 mb-2">Shipping Updates: Customers receive:</p>
            
            <ul className="list-disc pl-6 text-gray-600">
              <li>Order confirmation emails</li>
              <li>Shipping confirmations with tracking details</li>
              <li>Delivery attempt notifications</li>
              <li>Delivery completion confirmations</li>
            </ul>
          </div>

          {/* 12. Customer Support */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Customer Support</h2>
            
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-semibold text-bluegray mb-1">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:israelitesshopping171@gmail.com" className="text-brand-green hover:underline">
                    israelitesshopping171@gmail.com
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-bluegray mb-1">Phone</h3>
                <p className="text-gray-600">+91 903-052-8333</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-bluegray mb-1">Response time</h3>
                <p className="text-gray-600">Within 4 business hours during operational hours.</p>
              </div>
            </div>
          </div>

          {/* 13. Policy Updates */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Policy Updates</h2>
            <p className="text-gray-600 mb-4">
              This policy is subject to change. Updates will be posted on our website. Customers will be notified 
              via email for significant changes at least 7 days in advance. Continued use of our services implies 
              acceptance of the updated policy.
            </p>
            <p className="text-gray-600">
              For more information, contact us at{' '}
              <a href="mailto:israelitesshopping171@gmail.com" className="text-brand-green hover:underline">
                israelitesshopping171@gmail.com
              </a>
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

export default Shipping;

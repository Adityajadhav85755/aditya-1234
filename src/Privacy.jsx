// src/components/PrivacyPolicy.js

import React, { useContext } from 'react';
import { LoginStatusContext } from '.';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Privacy = () => {
    // let [loginStatus, setLoginStatus, showLoginForm, setShowLoginForm, showRegisterForm, setShowRegisterForm, userData, setUserData] = useContext(LoginStatusContext)
  return (

    <>
    
    <div>
      <section
        id="privacy-policy"
        style={{
          padding: '30px',
          backgroundColor: '#f4f4f4',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '40px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px',  fontFamily: 'Roboto, sans-serif'}}>
            Privacy Policy
          </h2>

          <div style={{ lineHeight: '1.8', fontSize: '1rem',fontFamily: 'Arial, sans-serif' }}>
            {/* Introduction */}
            <p>
              Last Updated: April 13, 2021
              <br />
              Sky Need Solution ("Company", "we", "us", or "our") operates the website https://www.skyneedsolution.com. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our services or Platform.
              <br />
              This document complies with applicable laws, including the Information Technology Act, 2000 and its rules. We encourage you to read this Privacy Policy and the accompanying Terms of Use carefully before accessing the Platform.
              <br />
              By using the Platform, you agree to this Privacy Policy. If you do not agree, please refrain from using our Platform or providing your information.
            </p>

            {/* 1. Collection of Information */}
            <p>
              <strong>1. Collection of Information</strong>
            </p>
            <p>
              We collect information in the following ways:
            </p>
            <ul>
              <li><strong>1.1 Information You Provide:</strong> Registration details (e.g., name, email address, phone number, address). Property-related details (e.g., property photos, descriptions, or preferences). Payment information and bank details when availing paid services.</li>
              <li><strong>1.2 Information We Collect Automatically:</strong> Device Information: Your operating system, browser type, and other device-related information. IP Address: Automatically logged when you visit the Platform. Cookies: Used to track preferences and enhance the user experience.</li>
              <li><strong>1.3 Third-Party Data:</strong> We may collect information from external sources, such as marketing partners, or through your interactions with our social media pages.</li>
            </ul>

            {/* 2. Use of Information */}
            <p>
              <strong>2. Use of Information</strong>
            </p>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Deliver and improve our services.</li>
              <li>Personalize user experience.</li>
              <li>Ensure compliance with legal and regulatory obligations.</li>
              <li>Enhance security and fraud prevention.</li>
              <li>Send service updates, notifications, and marketing communications.</li>
            </ul>
            

            {/* 3. Sharing of Information */}
            <p>
              <strong>3. Sharing of Information</strong>
            </p>
            <p>
              We may share your information in the following cases:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> With third-party vendors to assist with operations (e.g., payment processing, analytics).</li>
              <li><strong>Advertising:</strong> With partners like Google and social media platforms for targeted advertising.</li>
              <li><strong>Legal Compliance:</strong> As required by law to comply with legal obligations or protect our rights.</li>
              <li><strong>Business Transactions:</strong> During mergers, acquisitions, or sale of assets, your information may be transferred.</li>
            </ul>

            {/* 4. Security of Information */}
            <p>
              <strong>4. Security of Information</strong>
              <br />
              We implement reasonable technical, administrative, and physical safeguards to protect your Personal Information. However, no method of data transmission is completely secure. Use of the Platform is at your own risk.
              <br />
              In case of any security breaches, we will notify affected users promptly.
            </p>

            {/* 5. Your Rights */}
            <p>
              <strong>5. Your Rights</strong>
            </p>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access and Update: Request corrections to your Personal Information.</li>
              <li>Withdraw Consent: Opt out of data collection or withdraw previously given consent.</li>
              <li>Data Deletion: Request deletion of your Personal Information, subject to legal obligations.</li>
            </ul>
            <p>
              To exercise these rights, contact us at <strong>support@skyneedsolution.com</strong>.
            </p>

            {/* 6. Data Retention */}
            <p>
              <strong>6. Data Retention</strong>
              <br />
              We retain your information for as long as necessary to fulfill service requirements, resolve disputes, and comply with legal obligations.
            </p>

            {/* 7. Permissions */}
            <p>
              <strong>7. Permissions</strong>
            </p>
            <ul>
              <li><strong>Contacts:</strong> Used to identify connections and facilitate property recommendations.</li>
              <li><strong>Location:</strong> Enhances your experience by showing properties near your location.</li>
              <li><strong>Phone Number:</strong> Stored for authentication and service-related communication.</li>
              <li><strong>Installed Apps (Fraud Detection):</strong> Used to secure payment processes against fraudulent activities.</li>
            </ul>

            {/* 8. Updates to this Privacy Policy */}
            <p>
              <strong>8. Updates to this Privacy Policy</strong>
              <br />
              We may update this Privacy Policy periodically. Any significant changes will be communicated via email or a prominent notice on the Platform. We encourage you to review this page regularly.
            </p>

            {/* 9. Grievance Redressal */}
            <p>
              <strong>9. Grievance Redressal</strong>
              <br />
              For any grievances related to this Privacy Policy or misuse of your information, please contact our Grievance Officer:
            </p>
            <p>
              Name: Rahul Sharma
              <br />
              Designation: Compliance Head
              <br />
              Contact: +91-9004424598
              <br />
              Email: skyneedsolution@gmail.com
              <br />
              We aim to address all grievances within 30 days of receipt.
            </p>

            {/* 10. Contact Us */}
            <p>
              <strong>10. Contact Us</strong>
              <br />
              For privacy-related inquiries, contact us at:
            </p>
            <p>
              Sky Need Solution
              <br />
              Malad West
              <br />
              Email: <strong>support@skyneedsolution.com</strong>
              <br />
              Phone: +91-7045228136
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Privacy;

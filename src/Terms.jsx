// src/components/TermsAndConditions.js

import React from 'react';

const Terms = () => {
  return (
    <div>
      <section
        id="terms-and-conditions"
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
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', fontFamily: 'Roboto, sans-serif' }}>
            Terms and Conditions
          </h2>

          <div style={{ lineHeight: '1.8', fontSize: '1rem' , fontFamily: 'Arial, sans-serif' }}>
            {/* 1. Introduction */}
            <p>
              <strong>1. Introduction</strong>
              <br />
              Welcome to Sky Need Solution! These terms and conditions outline the rules and regulations for the use of our website, services, or products. By accessing or using our services, you agree to abide by these terms. If you do not agree to these terms, please discontinue use immediately.
            </p>

            {/* 2. Definitions */}
            <p>
              <strong>2. Definitions</strong>
              <br />
              "Company" refers to Sky Need Solution, located at Malad West.
              <br />
              "User" refers to any individual or entity accessing or using the company's services.
              <br />
              "Services" encompass all products, tools, and offerings provided by Sky Need Solution.
            </p>

            {/* 3. Eligibility */}
            <p>
              <strong>3. Eligibility</strong>
              <br />
              You must be 18 years or older to use our services. By agreeing to these terms, you confirm that you meet the eligibility requirements.
            </p>

            {/* 4. User Responsibilities */}
            <p>
              <strong>4. User Responsibilities</strong>
              <br />
              Users agree to:
            </p>
            <ul>
              <li>Provide accurate and up-to-date information during registration or use of services.</li>
              <li>Keep their login credentials confidential and notify the company of any unauthorized access.</li>
              <li>Use the services only for lawful purposes and not engage in activities that could harm the company or other users.</li>
            </ul>

            {/* 5. Prohibited Activities */}
            <p>
              <strong>5. Prohibited Activities</strong>
              <br />
              Users are strictly prohibited from:
            </p>
            <ul>
              <li>Misusing the platform for illegal activities.</li>
              <li>Spamming, hacking, or spreading malware.</li>
              <li>Violating intellectual property rights or privacy rights of others.</li>
            </ul>

            {/* 6. Intellectual Property */}
            <p>
              <strong>6. Intellectual Property</strong>
              <br />
              All content, logos, trademarks, and materials provided by Sky Need Solution are the intellectual property of the company. Users may not copy, reproduce, or redistribute these materials without prior written consent.
            </p>

            {/* 7. Payment Terms */}
            <p>
              <strong>7. Payment Terms</strong>
              <br />
              Users agree to pay for services or products as per the agreed-upon pricing. Payments are non-refundable unless stated otherwise in a separate agreement or policy. Late payments may result in suspension or termination of access to services.
            </p>

            {/* 8. Limitation of Liability */}
            <p>
              <strong>8. Limitation of Liability</strong>
              <br />
              Sky Need Solution is not responsible for:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages arising from the use or inability to use our services.</li>
              <li>Losses due to user error or failure to comply with these terms.</li>
            </ul>

            {/* 9. Termination */}
            <p>
              <strong>9. Termination</strong>
              <br />
              The company reserves the right to terminate access to services for any user who violates these terms, without prior notice.
            </p>

            {/* 10. Governing Law */}
            <p>
              <strong>10. Governing Law</strong>
              <br />
              These terms and conditions are governed by the laws of India. Any disputes arising from these terms will be resolved in the court.
            </p>

            {/* 11. Changes to Terms */}
            <p>
              <strong>11. Changes to Terms</strong>
              <br />
              Sky Need Solution reserves the right to update these terms at any time. Users will be notified of significant changes via email or on the platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

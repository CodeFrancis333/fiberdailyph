import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function PrivacyPolicy() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section
        className="py-7"
        id="privacy-policy"
        style={{ backgroundColor: 'white', flexGrow: 1 }}
      >
        <div className="container">
          <h1 className="mb-4">Privacy Policy (Basic Version)</h1>
          <p><strong>Effective Date:</strong> [Insert date]</p>
          <p>
            Fiber Daily PH ("we", "our", "us") values your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or engage with our services.
          </p>

          <h3>1. Information We Collect</h3>
          <ul>
            <li>Name, email, address, and contact info (via order form or sign-up)</li>
            <li>Order details (flavor, quantity, delivery location)</li>
            <li>Website usage data (cookies, analytics)</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>To process and deliver orders</li>
            <li>To respond to inquiries</li>
            <li>To improve our services and website</li>
            <li>To send updates, promotions (if subscribed)</li>
          </ul>

          <h3>3. Sharing of Information</h3>
          <p>
            We never sell your data. We may share data with trusted services (e.g., delivery platforms, email services) strictly for operational purposes.
          </p>

          <h3>4. Security</h3>
          <p>
            We take reasonable steps to protect your information, including encryption and access controls.
          </p>

          <h3>5. Your Rights</h3>
          <p>
            You may request access to, correction, or deletion of your data by emailing us at [your email].
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function TermsAndConditions() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <section
        className="py-7"
        id="terms"
        style={{ backgroundColor: 'white', flexGrow: 1 }}
      >
        <div className="container">
          <h1 className="mb-4">Terms and Conditions</h1>

          <h3>1. Orders &amp; Deliveries</h3>
          <ul>
            <li>All orders must be placed at least 1 day in advance.</li>
            <li>Free delivery applies within select areas only.</li>
            <li>Jars must be received in person or confirmed with drop-off instructions.</li>
          </ul>

          <h3>2. Jar Return Policy</h3>
          <ul>
            <li>Clean and undamaged jars may be returned for ₱5 off your next order.</li>
            <li>Return 5 jars = 1 FREE oat jar (any available flavor).</li>
            <li>Returns must be made during the next pickup or delivery.</li>
          </ul>

          <h3>3. Payments</h3>
          <ul>
            <li>We accept GCash and bank transfers.</li>
            <li>Orders must be paid in full before dispatch, unless stated otherwise.</li>
          </ul>

          <h3>4. Refunds &amp; Issues</h3>
          <ul>
            <li>Due to the perishable nature of the product, we do not accept returns.</li>
            <li>If your jar is damaged upon delivery, notify us within 24 hours for replacement options.</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;

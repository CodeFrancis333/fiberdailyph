import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Disclaimer() {
  return (
    <div>
      <Navbar />
      <section
        className="py-5"
        id="disclaimer"
        style={{ backgroundColor: 'white', minHeight: '90vh' }}
      >
        <div className="container">
          <h1 className="mb-4">Disclaimer</h1>
          <p>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              style={{ fontSize: '2rem', color: '#f44336' }}
            />
          </p>
          <p>
            Fiber Daily PH provides overnight oats made from real, natural ingredients. However:
          </p>
          <ul>
            <li>We do not claim to cure or treat any medical condition.</li>
            <li>Ingredients may contain allergens like peanuts, dairy, or tree nuts.</li>
            <li>Our product is made in a home kitchen that may handle allergens.</li>
            <li>Always check our labels before consumption.</li>
            <li>Please consult your doctor if you have dietary restrictions.</li>
          </ul>
          <p>
            By ordering, you accept responsibility for any personal dietary concerns.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Disclaimer;

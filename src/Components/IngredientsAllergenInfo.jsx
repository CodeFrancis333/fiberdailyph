import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function IngredientsAllergenInfo() {
  return (
    <section className="py-5" id="ingredients">
      <div className="container text-center">
        <h2 className="mb-4 display-5 text-secondary fw-bold">What's Inside?</h2>
        <p className='fs-5 text-secondary'>
          Our overnight oats are made with whole, real, and <strong>plant-based ingredients</strong>. Every jar is <strong>high in fiber</strong>, <strong>gut-friendly</strong>, and <strong>100% preservative-free</strong>.
        </p>
        <p className="fs-5 text-secondary">
          <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
          Allergen Disclaimer:
          <br/>
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger me-2" />
          Contains peanuts, chia, and plant-based milk. Nut-free options available.
        </p>    
      </div>
    </section>
  );
}

export default IngredientsAllergenInfo;

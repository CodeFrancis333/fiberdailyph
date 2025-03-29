import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';

function JarReturnSection() {
  return (
    <section className="py-5" id="jar-return">
      <div className="container text-center">
        <h2 className="mb-4 display-5 text-secondary">Return Your Jars, Get Rewards!</h2>
        <ul className="list-unstyled">
          <li className='fs-5 lead'>
            <FontAwesomeIcon icon={faRecycle} className="me-2" />
            Return a jar = ₱5 off next order
          </li>
          <li className='fs-5 lead'>
            <FontAwesomeIcon icon={faRecycle} className="me-2" />
            Return 5 jars = 1 FREE oat jar
          </li>
          <li className='fs-5 lead'>
            <FontAwesomeIcon icon={faRecycle} className="me-2" />
            Jars must be clean and returned during delivery/pickup
          </li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          alt="Stacked jars"
          className="img-fluid mt-3"
          style={{ maxWidth: "300px" }}
        />
      </div>
    </section>
  );
}

export default JarReturnSection;

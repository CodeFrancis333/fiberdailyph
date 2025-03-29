import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
  return (
    <section className="py-5" id="contact" style={{ backgroundColor: 'beige' }}>
      <div className="container">
        <h2 className="mb-4 text-secondary display-5">Contact Us</h2>
        <div className="row">
          {/* Left column: Contact Information */}
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li className="text-secondary mb-2 fs-5">
                <strong>Instagram:</strong>{' '}
                <a
                  href="https://instagram.com/fiberdailyph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  @fiberdailyph
                </a>
              </li>
              <li className="text-secondary mb-2 fs-5">
                <strong>Facebook:</strong> Fiber Daily PH
              </li>
              <li className="text-secondary mb-2 fs-5">
                <strong>Email:</strong> hello@fiberdailyph.com
              </li>
              <li className="mb-2 fs-4">
                <a href="https://www.facebook.com/profile.php?id=61574875494332">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="me-3"
                    style={{ color: '1d2a16', fontSize: '1.5em' }}
                  />
                </a>
                <a href="https://www.instagram.com/fiberdailyph">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="me-3"
                    style={{ color: '1d2a16', fontSize: '1.5em' }}
                  />
                </a>
                <a href="https://www.youtube.com/Fiberdailyph">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="me-2"
                    style={{ color: '1d2a16', fontSize: '1.5em' }}
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* Right column: Contact Form */}
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  id="contactName"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-solid"
                  id="contactEmail"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactMessage" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control form-control-solid"
                  id="contactMessage"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

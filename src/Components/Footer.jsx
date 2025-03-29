import React from 'react';

function Footer() {
  return (
    <footer className="py-3" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left section */}
          <div className="col text-start lead">
            <a href="#" className='text-dark text-decoration-none'>
                &copy; 2025 Fiber Daily PH
            </a>
          </div>
          {/* Right section */}
          <div className="col text-end lead">
            <a href="/privacy" className="text-secondary me-3 text-decoration-none">Privacy Policy</a>
            <a href="/disclaimer" className="text-secondary me-3 text-decoration-none">Disclaimer</a>
            <a href="/terms" className="text-secondary text-decoration-none">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

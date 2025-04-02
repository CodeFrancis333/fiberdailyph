// src/Components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

import Logo2 from '../assets/images/Logo2.png';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
      style={{
        backgroundColor: "rgba(0, 123, 255, 1)", 
        transition: "background-color 0.3s ease"
      }}
    >
      <div className="container">

        <Link className="navbar-brand" to="/">
          <div style={{ height: "40px", width: "auto" }}>
            <img
              src={Logo2}
              alt="Fiber Daily PH Logo"
              style={{ height: "100%" }}
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* In-page links */}
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

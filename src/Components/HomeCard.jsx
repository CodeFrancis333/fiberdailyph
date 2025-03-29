import React from 'react';

function HomeCard({ title, description, icon, background }) {
  return (
    <div
      className="card rounded overflow-hidden text-white hover-reveal"
      style={{
        aspectRatio: '1', // Maintains a square shape responsively
        position: 'relative',
        background: `url(${background}) no-repeat center center/cover`,
      }}
    >
      {/* Initial content: icon and title positioned at the top */}
      <div
        className="card-img-overlay d-flex flex-column justify-content-start align-items-center initial-content"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', paddingTop: '1rem' }}
      >
        <div style={{ fontSize: '2.5rem' }}>{icon}</div>
        <h5 className="card-title mt-2 display-6 text-primary fw-bold">{title}</h5>
      </div>

      {/* Hover content: description replaces the initial content */}
      <div
        className="card-img-overlay d-flex justify-content-center align-items-center hover-content"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <p className="card-text text-center px-2 lead">{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;

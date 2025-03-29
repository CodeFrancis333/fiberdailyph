import React from 'react';

function GalleryCard({ image, alt, link, label }) {
  return (
    <div
      className="gallery-card rounded overflow-hidden"
      style={{
        background: `url(${image}) no-repeat center center/cover`,
        aspectRatio: '1',
      }}
    >
      {/* Overlay: Hidden by default, appears on hover */}
      <div className="overlay d-flex align-items-center justify-content-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-decoration-none"
        >
          {label}
        </a>
      </div>
    </div>
  );
}

export default GalleryCard;

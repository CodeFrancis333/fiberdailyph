import React from 'react';
import GalleryCard from './GalleryCard';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Jar + Coffee',
    link: 'https://instagram.com/yourpost1',
    label: 'Jar + Coffee',
  },
  {
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Fridge Shot',
    link: 'https://instagram.com/yourpost2',
    label: 'Fridge Shot',
  },
  {
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Spoonful Close-Up',
    link: 'https://instagram.com/yourpost3',
    label: 'Spoonful Close-Up',
  },
  {
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    alt: 'Jar Return Moment',
    link: 'https://instagram.com/yourpost4',
    label: 'Jar Return Moment',
  },
];

function GallerySection() {
  return (
    <section className="py-5" id="gallery">
      <div className="container text-center">
        <h2 className="mb-4 text-secondary display-5">Good Mornings Look Like This</h2>
        <div className="row g-4">
          {galleryItems.map((item, index) => (
            <div className="col-md-3" key={index}>
              <GalleryCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;

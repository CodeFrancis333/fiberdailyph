import React from 'react';

// Import images (src/assets/images)
import BananaLogo from '../assets/images/BananaLogo.png';
import ChocoMocha from '../assets/images/ChocoMocha.png';
import Berries from '../assets/images/Berries.png';
import MangoCoconut from '../assets/images/MangoCoconut.png';
import Matcha from '../assets/images/Matcha.png';
import ComingSoon from '../assets/images/Soon.png';


const flavors = [
  {
    title: 'PB Banana Crunch',
    description:
      'Oats, banana, chia seeds, peanut butter, plant-based milk, honey, and crushed peanuts. Packed with fiber and protein!',
    icon: BananaLogo,
    background: ComingSoon,
  },
  {
    title: 'Choco Mocha Mornings',
    description:
      'A delicious blend of cocoa and coffee for a perfect morning boost.',
    icon: ChocoMocha,
    background: ComingSoon,
  },
  {
    title: 'Berry Chia Bliss',
    description:
      'A burst of mixed berries combined with chia seeds for a refreshing twist.',
    icon: Berries,
    background: ComingSoon,
  },
  {
    title: 'Mango Coconut Glow',
    description: 'Tropical flavors that will transport you to paradise.',
    icon: MangoCoconut,
    background: ComingSoon,
  },
  {
    title: 'Matcha Oat Zen',
    description:
      'A calm, invigorating mix of matcha and oats to soothe your mind and body.',
    icon: Matcha,
    background: ComingSoon,
  },
];


function SingleFlavorCard({ title, description, icon, background }) {
  return (
    <div
      className="card rounded-5 overflow-hidden text-white hover-reveal"
      style={{
        aspectRatio: '1',
        position: 'relative',
        background: `url(${background}) no-repeat center center/cover`,
      }}
    >
      {/* Initial content: icon and title */}
      <div
        className="card-img-overlay d-flex flex-column justify-content-start align-items-center initial-content"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', paddingTop: '1rem' }}
      >
        <img
          src={icon}
          alt={`${title} icon`}
          style={{ width: '80px', height: '80px' }}
        />
        <h5 className="card-title mt-2 display-6 text-secondary fw-bold">
          {title}
        </h5>
      </div>

      {/* Hover content: description */}
      <div
        className="card-img-overlay d-flex justify-content-center align-items-center hover-content"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <p className="card-text text-center px-2 lead">{description}</p>
      </div>
    </div>
  );
}


function HomeCard() {
  return (
    <section className="py-0" id="menu">
      <div className="container text-center">
        <div className="row g-1 justify-content-center">
          {flavors.map((flavor, index) => (
            <div className="col-md-5 mb-4 mx-3" key={index}>
              <SingleFlavorCard {...flavor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeCard;

import React from 'react';
import Navbar from '../Components/Navbar';
import HomeCard from '../Components/HomeCard';
import JarReturnSection from '../Components/JarReturnSection';
import IngredientsAllergenInfo from '../Components/IngredientsAllergenInfo';
import GallerySection from '../Components/GallerySection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
import '../main.scss';

// Updated flavors array with new background URLs from Unsplash
const flavors = [
  {
    title: 'PB Banana Crunch',
    description:
      'Oats, banana, chia seeds, peanut butter, plant-based milk, honey, and crushed peanuts. Packed with fiber and protein!',
    icon: '🍌',
    background:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Choco Mocha Mornings',
    description:
      'A delicious blend of cocoa and coffee for a perfect morning boost.',
    icon: '☕',
    background:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Berry Chia Bliss',
    description:
      'A burst of mixed berries combined with chia seeds for a refreshing twist.',
    icon: '🍓',
    background:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Mango Coconut Glow',
    description:
      'Tropical flavors that will transport you to paradise.',
    icon: '🥭',
    background:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Matcha Oat Zen',
    description:
      'A calm, invigorating mix of matcha and oats to soothe your mind and body.',
    icon: '🍵',
    background:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
  },
];

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <div className="container py-5 mt-5">
          <h1 className="text-secondary fw-bold display-3">
            Healthy Overnight Oats, Made Fresh Daily
          </h1>
          <p className="text-secondary lead">
            Simple, gut-loving jars of nourishment — delivered straight to you.
          </p>
          <a href="#menu" className="btn btn-secondary me-4 btn-lg">
            See Our Flavors
          </a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">
            Contact Us
          </a>
          <div className="tagline mt-3 lead text-secondary">
            <em>"Nourishment in every spoon."</em>
          </div>
        </div>
      </section>

      {/* Menu Section */}
        <section className="py-0" id="menu">
        <div className="container text-center">
            <div className="row g-1 justify-content-center">
            {flavors.map((flavor, index) => (
                <div className="col-md-5 mb-4 mx-3" key={index}>
                <HomeCard {...flavor} />
                </div>
            ))}
            </div>
        </div>
        </section>

          {/* Jar Return Section */}
          <JarReturnSection />

          {/* Ingredients Allergen Info */}
          <IngredientsAllergenInfo />

          {/* Gallery Section */}
          <GallerySection />

          {/* Contact Section */}
          <ContactSection />
    
          {/* Footer Section */}
          <Footer/>
    </div>
  );
}

export default Home;

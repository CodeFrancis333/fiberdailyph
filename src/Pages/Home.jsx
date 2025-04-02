import React from 'react';
import Navbar from '../Components/Navbar';
import HomeCard from '../Components/HomeCard'; 
import JarReturnSection from '../Components/JarReturnSection';
import IngredientsAllergenInfo from '../Components/IngredientsAllergenInfo';
import GallerySection from '../Components/GallerySection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
import '../main.scss';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <div className="container py-5 mt-7">
          <h1 className="text-secondary fw-bold display-3 mb-4">
            Healthy Overnight Oats, Made Fresh Daily
          </h1>
          <p className="text-secondary lead mb-4">
            Simple, gut-loving jars of nourishment — delivered straight to you.
          </p>
          <a href="#menu" className="btn btn-secondary me-4 btn-lg">
            See Our Flavors
          </a>
          <a href="#contact" className="btn btn-outline-dark btn-lg">
            Contact Us
          </a>
          <div className="tagline mt-4 lead text-secondary">
            <em>"Nourishment in every spoon."</em>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <HomeCard />

      {/* Jar Return Section */}
      <JarReturnSection />

      {/* Ingredients Allergen Info */}
      <IngredientsAllergenInfo />

      {/* Gallery Section */}
      <GallerySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;

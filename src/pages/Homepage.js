// Homepage.js
import React from 'react';
import './Homepage.css';
import Mewsletter from './Mewsletter';
import Product from './Product';
import ProductFeat from './ProductFeat';
import FeatureCard from './FeatureCard';
import Pricing from './Pricing';
import About from './About';
import ContactUs from './ContactUs';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Mewsletter />
      <ProductFeat />
      <FeatureCard />
      <Pricing />
      <div className="product-container">
        <Product />
      </div>
      <div className="About-container">
        <About />
      </div>
      <div className="Contact-container">
      <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
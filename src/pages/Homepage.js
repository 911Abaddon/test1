// Homepage.js
import React from 'react';
import './Homepage.css';
import Mewsletter from './Mewsletter';
import Product from './Product';
import ProductFeat from './ProductFeat';
import FeatureCard from './FeatureCard';
import Pricing from './Pricing';

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
    </div>
  );
};

export default Homepage;
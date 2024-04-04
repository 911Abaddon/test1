// Homepage.js
import React from 'react';
import './Homepage.css';
import Mewsletter from './Mewsletter';
import Product from './Product';
import ProductFeat from './ProductFeat';
import FeatureCard from './FeatureCard';

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Mewsletter />
      <ProductFeat />
      <FeatureCard />
      <Product />

    </div>
  );
};

export default Homepage;
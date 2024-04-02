// Homepage.js
import React from 'react';
import './Homepage.css';
import Mewsletter from './Mewsletter';
import Product from './Product';
import ProductFeat from './ProductFeat';




const Homepage = () => {
  return (
    <div className="homepage-container">
      <Mewsletter />
      <Product />
      <ProductFeat />
    </div>
  );
};



export default Homepage;

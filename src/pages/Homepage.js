import React from 'react';
import Product from './Product';
import useExternalScript from '../utils/useExternalScript'; // Adjust the import path

const HomePage = () => {
//  useExternalScript("https://olympianstorage.blob.core.windows.net/olympian-container/loader.js");

  return (
    <Product />
  );
};

export default HomePage;

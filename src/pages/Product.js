import React from 'react';
import './Product.css';

const Product = () => {
  const features = [
    {
      title: 'Accelerated hosting',
      icon: 'M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z',
    },
    {
      title: 'Unlimited search',
      icon: 'M40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z',
    },
  ];

  return (
    <div className="App">
      <section className="features">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <div className="icon-container">
                <svg viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" style={{ userSelect: 'none', width: '100%', height: '100%', display: 'inline-block', fill: 'rgb(255, 255, 255)', color: 'rgb(255, 255, 255)', flexShrink: 0 }}>
                  <path d={feature.icon} />
                </svg>
              </div>
              <div className="text-container">
                <p className="feature-title">{feature.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Product;
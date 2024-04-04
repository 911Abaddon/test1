import React, { useEffect, useRef } from 'react';
import './Product.css';

const features = [
  'Single sign-on',
  'Increased bandwidth',
  'Large CMS upgrade',
  'Localization upgrade',
  'Custom proxy setup',
  // Repeat the items to have enough content to scroll smoothly
  'Single sign-on',
  'Increased bandwidth',
  'Large CMS upgrade',
  'Localization upgrade',
  'Custom proxy setup',
];

const Product = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId;

    const animate = () => {
      if (scrollElement.scrollTop < scrollElement.scrollHeight - scrollElement.clientHeight) {
        scrollElement.scrollTop += 1;
      } else {
        scrollElement.scrollTop = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Clean up the animation frame upon component dismount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="addon-section">
      <div className="addon-content">
        <div className="addon-title">Add-ons are powerful upgrades for your pro site.</div>
        <button className="learn-more-button">Learn more</button>
      </div>
      <div className="addons-list-container" ref={scrollRef}>
        <ul className="addons-list">
          {features.map((feature, index) => (
            <li key={index} className="addon-item">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;

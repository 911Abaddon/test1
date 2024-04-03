// ScrollingFeatures.js
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
    
    // We use requestAnimationFrame for smooth animations
    const animate = () => {
      // Add your scroll amount
      scrollElement.scrollTop += 1;

      // If we've scrolled past the first half, reset to start
      if (scrollElement.scrollTop >= scrollElement.scrollHeight / 2) {
        scrollElement.scrollTop = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    startAnimation();

    // Start the animation loop
    function startAnimation() {
      animationFrameId = requestAnimationFrame(animate);
    }

    // Clean up the animation frame upon component dismount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="scroll-container" ref={scrollRef}>
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="feature-text">{feature}</div>
        </div>
      ))}
    </div>
  );
};

export default Product;

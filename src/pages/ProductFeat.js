import React, { useRef, useEffect, useState } from 'react';
import './ProductFeat.css';

const ProductFeat = () => {
  const [scrollItems, setScrollItems] = useState([]);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    const newScrollItems = Array.from(scrollContainerRef.current.children).map((child) => {
      const rect = child.getBoundingClientRect();
      const visibleAmount = Math.min(containerRect.bottom, rect.bottom) - Math.max(containerRect.top, rect.top);
      const visibleRatio = visibleAmount / rect.height;
      const opacity = Math.max(Math.min(visibleRatio, 1), 0.3); // Ensures a minimum opacity
      const scale = opacity; // Simple linear relationship between opacity and scale
      return { opacity, scale };
    });
    setScrollItems(newScrollItems);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on first mount

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="product-feat">
    <div className="left-side">
      <h1 className="title">Learn and grow with Lorem Ipsum Dolor</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur. Dolor quis a leo lobortis orci tortor eget. Enim proin aliquam nulla a lacus pellentesque quam in. Nec vel nulla nunc vel in molestie proin convallis. Leo et vulputate tincidunt justo a varius et elementum.
      </p>
      <button className="button">LOREM IPSUM DOLOR</button>
    </div>
    <div className="right-side">
        <div className="scroll-container" ref={scrollContainerRef}>
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="scroll-item"
              style={{
                opacity: scrollItems[index]?.opacity ?? 1,
                transform: `scale(${scrollItems[index]?.scale ?? 1})`
              }}
            >
              Feature demo here {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeat;

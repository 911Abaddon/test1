import React, { useState, useEffect } from 'react';
import './Background.css';

function Background() {
  const [numSquares, setNumSquares] = useState(0);

  useEffect(() => {
    function calculateNumSquares() {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      const squareSize = 75;
      const numSquaresX = Math.ceil(screenWidth / squareSize);
      const numSquaresY = Math.ceil(screenHeight / squareSize);
      setNumSquares(numSquaresX * numSquaresY);
    }

    calculateNumSquares();

    const handleResize = () => {
      calculateNumSquares();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const squares = Array.from({ length: numSquares }, (_, index) => (
    <div key={index} className="square"></div>
  ));

  return (
    <div className="Background">
      <div className="grid">{squares}</div>
    </div>
  );
}

export default Background;

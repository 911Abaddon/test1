// Background.js

import React, { useState, useEffect } from 'react';
import './Background.css';

function Background() {
  const [numSquares, setNumSquares] = useState(0);

  useEffect(() => {
    function calculateNumSquares() {
      // Get the dimensions of the user's screen
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Calculate the number of squares based on the screen size
      const minDimension = Math.min(screenWidth, screenHeight);
      const squareSize = Math.floor(minDimension / 100); // Adjust 16 according to your preference
      const numSquaresX = Math.ceil(screenWidth / squareSize);
      const numSquaresY = Math.ceil(screenHeight / squareSize);
      
      // Set the total number of squares
      setNumSquares(numSquaresX * numSquaresY);
    }

    // Calculate the number of squares when the component mounts
    calculateNumSquares();
  }, []);

  const squares = Array.from({ length: numSquares }, (_, index) => (
    <div key={index} className="square" />
  ));

  return (
    <div className="Background">
      <div className="grid">
        {squares}
      </div>
    </div>
  );
}

export default Background;

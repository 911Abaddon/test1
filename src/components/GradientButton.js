import React from 'react';
import PropTypes from 'prop-types';
import './GradientButton.css'; // Import the CSS file

const GradientButton = ({ buttonText, onClick }) => {
  return (
    <div className="bg-gradient-container">
      <div className="gradient-button-container"> {/* Updated */}
        <button className="gradient-button" onClick={onClick}>
          <span className="button-text">{buttonText}</span>
          <div className="gradient-background"></div>
        </button>
      </div>
    </div>
  );
}

GradientButton.propTypes = {
  buttonText: PropTypes.string.isRequired, // Text for the button
  onClick: PropTypes.func, // Click handler for the button
};

export default GradientButton;

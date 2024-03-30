import React from 'react';
import './NavigationBar.css'; // Make sure to use the correct path to your CSS file
import GradientButton from './GradientButton'; // Import the GradientButton component


const NavigationBar = () => {
  
  // Function to handle the sign-in action
  const handleSignIn = () => {
    // Add your sign-in logic here
    alert("Signing in...");
  };

  return (
    <nav className="glass-nav">
        <div className="nav-links">
          <a href="#">Product</a>
          <a href="#">Price</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-logo">Heroniq</div>
        
        {/* Using the GradientButton component for the "Sign in" button */}
        <div className="nav-actions">
           <div className="signup-button-container">
          <GradientButton buttonText="Sign in" onClick={handleSignIn} />
            </div>
        </div>
    </nav>
  );
}

export default NavigationBar;

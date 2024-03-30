import React from 'react';
import './NavigationBar.css'; // Make sure to use the correct path to your CSS file

const NavigationBar = () => {
  return (
    <nav className="glass-nav">
        <div className="nav-links">
        <a href="#">Product</a>
        <a href="#">Price</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-logo">Heroniq</div>
      <div className="nav-actions">
        <button className="try-free">Sign in</button>
      </div>
    </nav>
  );
}

export default NavigationBar;

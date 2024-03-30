import React from 'react';
import './NavigationBar.css'; // Make sure to use the correct path to your CSS file

const NavigationBar = () => {
  return (
    <nav className="glass-nav">
        <div className="nav-links">
        <a href="#">Products</a>
        <a href="#">History</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-logo">logo.</div>
      <div className="nav-actions">
        <a href="#" className="sign-in">Sign in</a>
        <button className="try-free">Try free</button>
      </div>
    </nav>
  );
}

export default NavigationBar;

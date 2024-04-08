import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './About.css'; // Ensure the CSS file is named HeroniqAboutUs.css

const About = () => (
  <div className="heroniq-about-us">
    <h1>Welcome to Heroniq</h1>
    <p>
      At the heart of Heroniq lies the power of ChatGPT, driving our AI-powered chatbots to deliver remarkably human-like, engaging, and nuanced text generation. Our mission is to harness this advanced AI to provide solutions that not only understand but anticipate the needs of your customers, ensuring unparalleled engagement and satisfaction.
    </p>
    <p>
      With a passion for innovation and a commitment to excellence, we're dedicated to transforming your business communications, offering a seamless, human-centric interaction experience that propels you ahead in the digital era.
    </p>
    <button className="learn-more-button2" onClick={() => { /* Placeholder for navigation */ }}>Learn More</button>
  </div>
);

export default About;

import React, { useState } from 'react';
import './Mewsletter.css'; // Update the CSS import
import Drawoutlinebutton from '../components/Drawoutlinebutton';


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed with:', email);
    setEmail(''); // Reset input
  };

  return (
    <div className="newsletter-container"> 
      <div className="newsletter-content"> {/* Change the class name */}
        <h2>Elevate your business with AI Chatbots</h2>
        <p>Subscribe to our newsletter for expert tips, industry trends, and insider knowledge on leveraging AI chatbots for business growth.</p>
        <div className="subscription-form"> 
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for updates" 
          />
          {/* Use the Example component here */}
           <Drawoutlinebutton onClick={handleSubscribe}>Subscribe</Drawoutlinebutton>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

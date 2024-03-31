import React from 'react';
import './Product.css';

const Product = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    console.log('Subscribed with:', email);
    setEmail(''); // Reset input
  };

  return (
    <section id="product" className="product-section">
      <div className="container"> 
        <div className="product-content">
          <h2>Elevate your business with AI Chatbots</h2>
          <p>Subscribe to our newsletter for expert tips, industry trends, and insider knowledge on leveraging AI chatbots for business growth.</p>
          <div className="subscription-form"> 
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates" 
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

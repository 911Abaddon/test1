import React, { useState } from 'react';
import './Pricing.css'; // Make sure this path is correct to include your CSS
import NeumorphismButton from '../components/NeumorphismButton';

const Pricing = () => {
  const [selectedProduct, setSelectedProduct] = useState('AI Chatbot'); // Default selection set to AI Chatbot
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSelectedPlan(null); // Reset selected plan when switching products
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="pricing-table-container">
      <div className="ping"></div> {/* Add the ping element */}
      <div className="pricing-header">
        <h1>Choose the product and plan that’s right for you</h1>
        <div className="product-buttons">
          <NeumorphismButton 
            isActive={selectedProduct === 'Instagram Bot'} 
            onClick={() => handleProductSelect('Instagram Bot')}>
            Instagram Bot
          </NeumorphismButton>
          <NeumorphismButton 
            isActive={selectedProduct === 'AI Chatbot'} 
            onClick={() => handleProductSelect('AI Chatbot')}>
            AI Chatbot
          </NeumorphismButton>
        </div>
      </div>
      {selectedProduct === 'Instagram Bot' && (
        <div className="pricing-table">
          <PricingCard
            title="Basic Plan"
            price="€40/month"
            description="Basic features for Instagram Bot"
            features={[
              'Basic feature 1',
              'Basic feature 2',
              'Basic feature 3',
            ]}
            buttonText="BUY NOW"
            active={selectedPlan === 'Basic Plan'}
            onPlanSelect={() => handlePlanSelect('Basic Plan')}
          />
        </div>
      )}
      {selectedProduct === 'AI Chatbot' && (
        <div className="pricing-table">
          <PricingCard
            title="Basic Plan"
            price="€25/month"
            description="Basic features for AI Chatbot"
            features={[
              'Basic feature 1',
              'Basic feature 2',
              'Basic feature 3',
            ]}
            buttonText="BUY NOW"
            active={selectedPlan === 'Basic Plan'}
            onPlanSelect={() => handlePlanSelect('Basic Plan')}
          />
          <PricingCard
            title="Professional Plan"
            price="€50/month"
            description="Professional features for AI Chatbot"
            features={[
              'Professional feature 1',
              'Professional feature 2',
              'Professional feature 3',
            ]}
            buttonText="BUY NOW"
            active={selectedPlan === 'Professional Plan'}
            onPlanSelect={() => handlePlanSelect('Professional Plan')}
          />
          <PricingCard
            title="Enterprise Plan"
            price="€100/month"
            description="Enterprise features for AI Chatbot"
            features={[
              'Enterprise feature 1',
              'Enterprise feature 2',
              'Enterprise feature 3',
            ]}
            buttonText="BUY NOW"
            active={selectedPlan === 'Enterprise Plan'}
            onPlanSelect={() => handlePlanSelect('Enterprise Plan')}
          />
        </div>
      )}
    </div>
  );
};

const PricingCard = ({ title, price, description, features, buttonText, active, onPlanSelect }) => {
  const cardClass = active ? 'pricing-card active' : 'pricing-card';

  return (
    <div className={cardClass} onClick={onPlanSelect}>
      <div className="card-header">
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
      <div className="card-body">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default Pricing;

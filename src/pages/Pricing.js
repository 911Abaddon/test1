import React, { useState } from 'react';
import './Pricing.css'; // Make sure this path is correct to include your CSS
import NeumorphismButton from '../components/NeumorphismButton';


const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('Monthly');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="pricing-table-container">
      <div className="ping"></div> {/* Add the ping element */}
      <div className="pricing-header">
        <h1>Choose the plan that’s right for you</h1>
        <div className="billing-cycle-buttons">
          <NeumorphismButton 
            isActive={billingCycle === 'Monthly'} 
            onClick={() => handleBillingCycleChange('Monthly')}>
            Monthly
          </NeumorphismButton>
          <NeumorphismButton 
            isActive={billingCycle === 'Annual'} 
            onClick={() => handleBillingCycleChange('Annual')}>
            Annual
          </NeumorphismButton>
        </div>
      </div>
      <div className="pricing-table">
        <PricingCard
          title="Free"
          price="$0/month"
          description="Everything to start"
          features={[
            '10,000 requests/month',
            'Basic in app support',
            '2 users on your account',
            '1 workspace',
          ]}
          buttonText="SIGN UP FREE"
          active={selectedPlan === 'Free'}
          onPlanSelect={() => handlePlanSelect('Free')}
        />
        <PricingCard
          title="Professional"
          price="$49/month"
          description="Everything to launch"
          features={[
            '100,000 requests/month',
            'Email in app support',
            '10 users on your account',
            '10 work spaces',
          ]}
          buttonText="SIGN UP PROFESSIONAL"
          active={selectedPlan === 'Professional'}
          onPlanSelect={() => handlePlanSelect('Professional')}
        />
        <PricingCard
          title="Enterprise"
          price="$499/month"
          description="Everything to go public"
          features={[
            '10,000,000 requests/month',
            'Phone support',
            'Unlimited users on your account',
            'Unlimited work spaces',
          ]}
          buttonText="SIGN UP ENTERPRISE"
          active={selectedPlan === 'Enterprise'}
          onPlanSelect={() => handlePlanSelect('Enterprise')}
        />
      </div>
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

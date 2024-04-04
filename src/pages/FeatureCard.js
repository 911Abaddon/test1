import React, { useState } from 'react';
import './FeatureCard.css'

const FeatureCard = () => {
  const optionsData = [
    {
      background:
        '#FC6E51',
      icon: 'fa-walking',
      main: 'Blonkisoaz',
      sub: 'Omuke trughte a otufta',
    },
    {
      background:
        '#FC6E51',
      icon: 'fa-snowflake',
      main: 'Oretemauw',
      sub: 'Omuke trughte a otufta',
    },
    {
      background:
        '#FC6E51',
      icon: 'fa-tree',
      main: 'Iteresuselle',
      sub: 'Omuke trughte a otufta',
    },
    {
      background:
        '#FC6E51',
      icon: 'fa-tint',
      main: 'Idiefe',
      sub: 'Omuke trughte a otufta',
    },
    {
      background:
        '#FC6E51',
      icon: 'fa-sun',
      main: 'Inatethi',
      sub: 'Omuke trughte a otufta',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="options">
      {optionsData.map((option, index) => (
        <div
          key={index}
          className={`option ${index === activeIndex ? 'active' : ''}`}
          style={{ '--optionBackground': `url(${option.background})` }}
          onClick={() => setActiveIndex(index)}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className={`fas ${option.icon}`}></i>
            </div>
            <div className="info">
              <div className="main">{option.main}</div>
              <div className="sub">{option.sub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;

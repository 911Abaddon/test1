import React from 'react';
import styles from './NeumorphismButton.module.css'; // Make sure the path is correct

const NeumorphismButton = ({ isActive, children, onClick }) => {
  return (
    <button className={`${styles.buttonBase} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default NeumorphismButton;

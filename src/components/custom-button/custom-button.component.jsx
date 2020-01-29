import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, customClassName, ...otherProps }) => (
  <button className={`custom-button ${customClassName ? customClassName : ''}`}  {...otherProps}>
    {children}
  </button>
)

export default CustomButton;
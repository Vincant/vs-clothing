import React from 'react';
import './spinner.styles.scss';

// HOC (Higher-Order Component)
const Spinner = WrappedComponent => {
  const newComponent = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
      <div className='spinner-overlay'>
        <div className='spinner'></div>
      </div>
      ) : (
        <WrappedComponent {...otherProps} />
      );
  };
  return newComponent;
};

export default Spinner;
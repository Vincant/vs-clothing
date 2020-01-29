import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-group'>
    <input className='form-input' {...otherProps} onChange={handleChange}></input>
    {
      label 
        ? <label className={`form-label ${otherProps.value.length ? 'shrink' : ''}`}>{label}</label>  
        : null
    } 
  </div>
)

export default FormInput;
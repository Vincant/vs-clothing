import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const {name, price, imageUrl} = item;

  return(
    <div className='collection-item'>
      <div className='box'>
        <div className='image'>
          <img src={imageUrl} alt=''/>
        </div>
        <CustomButton customClassName='inverted' onClick={() => addItem(item)}>Add to Cart</CustomButton>
      </div>
      <div className='content'>
        <span className='name'>{name}</span>
        <span className='price'>{`$${price}`}</span>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
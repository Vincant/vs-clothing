import React from 'react';
import { connect } from 'react-redux';
import { removeItem, increaseItem, decreaseItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeItem, increaseItem, decreaseItem  }) => {
  const { imageUrl, name, quantity, price } = item;

  return(
    <div className='checkout-item'>
      <div className='image'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        {
          item.quantity > 1
            ? (<button className='arrow' onClick={() => decreaseItem(item)}>&#10094;</button>)
            : (<button className='arrow disabled' disabled>&#10094;</button>)
        }
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={() => increaseItem(item)}>&#10095;</button>
      </div>
      <span className='price'>${price}</span>
      <button className='remove' onClick={() => removeItem(item)}>&#10005;</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  increaseItem: item => dispatch(increaseItem(item)),
  decreaseItem: item => dispatch(decreaseItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

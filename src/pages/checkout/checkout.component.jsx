import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='grid'>
      <div className='checkout'>
        <div className='checkout-header'>
          <span className='image'>Product</span>
          <span className='name'>Description</span>
          <span className='quantity'>Quantity</span>
          <span className='price'>Price</span>
          <span className='remove'>Remove</span>
        </div>
        <div className='checkout-items'>
          {cartItems.length 
            ? cartItems.map( cartItem => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
              ))
            : <span className='empty-message'>Your cart is empty</span>
          }
        </div>
        <div className='checkout-total'>
          TOTAL: ${total}
        </div>
        <div className='test-warning'>
          *Please use the following test credit card for payments*:
          <br />
          4222 2222 2222 2
        </div>
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

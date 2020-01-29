import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';  // need for use history, instead Link to
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length 
        ? cartItems.map( cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        : <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      toggleCartHidden();
    }}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)  
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
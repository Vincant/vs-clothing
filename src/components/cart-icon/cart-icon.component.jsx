import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);
//without Library Reselect (bad way, component re-render each time)
// const mapStateToProps = ({ cart: {cartItems} }) => ({  //state.cart.cartItems
//   itemCount: cartItems.reduce( (accQuantity, cartItem) => accQuantity + cartItem.quantity, 0 )
// })

const mapStateToProps = (state) => ({ 
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
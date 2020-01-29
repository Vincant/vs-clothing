import { createSelector } from 'reselect';
/*input selector type
const selectCart = state => state.cart;  
const selectUser = state => state.user;
//output selector type
export const selectCartItems = createSelector(  
  [selectCart, selectuser],  //- collection input selectors
  (cart, user) => {}         //- func return value from this selectors
);*/

const selectCart = state => state.cart;
// used in cart-dropdown.component
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// used in header.component
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hiddenCart
);

// used in cart-icon.component
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce( (accQuantity, cartItem) => accQuantity + cartItem.quantity, 0 )
);

// used in checkout.component
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce( (accQuantity, cartItem) => accQuantity + (cartItem.price * cartItem.quantity), 0 )
);



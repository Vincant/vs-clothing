import { CartActionTypes } from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart, increaseItemInCart, decreaseItemInCart } from './cart.utils';

const INITIAL_STATE = {
  hiddenCart: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { 
        ...state, 
        hiddenCart: !state.hiddenCart 
      };  
    case CartActionTypes.ADD_ITEM:
      return { 
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
        //cartItems: [...state.cartItems, action.payload]   //action.payload = new Item, append to array
      };    
    case CartActionTypes.REMOVE_ITEM:
      return { 
        ...state, 
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }; 
    case CartActionTypes.INCREASE_ITEM:
      return { 
        ...state, 
        cartItems: increaseItemInCart(state.cartItems, action.payload)
      };    
    case CartActionTypes.DECREASE_ITEM:
      return { 
        ...state, 
        cartItems: decreaseItemInCart(state.cartItems, action.payload)
      };       
    default: 
      return state;
  }
};

export default cartReducer;
import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  //payload no need here  (in reducer - hidden: !state.hidden)
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const increaseItem = item => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload: item
})

export const decreaseItem = item => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: item
})
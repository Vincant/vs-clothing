import SHOP_DATA from './shop.data';
import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
  collections: SHOP_DATA,
  displayedItems: 0,  // how many items has been displayed
  newItems: 8         // show new 8 items by step
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SHOW_MORE_ITEMS:
      return { 
          ...state, 
          displayedItems: state.displayedItems + state.newItems
        }; 
    case ShopActionTypes.CLEAR_DISPLAYED_ITEMS:
      return { 
          ...state, 
          displayedItems: 0
        }; 
    default:
      return state;
  }
};

export default shopReducer;
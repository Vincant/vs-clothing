import { ShopActionTypes } from './shop.types';

export const moreCollectionItems = totalItem => ({
  type: ShopActionTypes.SHOW_MORE_ITEMS,
  payload: totalItem
})

export const clearDisplayedItems = displayedItems => ({
  type: ShopActionTypes.CLEAR_DISPLAYED_ITEMS,
  payload: displayedItems
})
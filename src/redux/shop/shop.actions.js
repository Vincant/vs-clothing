import { ShopActionTypes } from './shop.types';

export const moreCollectionItems = () => ({
  type: ShopActionTypes.SHOW_MORE_ITEMS
});

export const clearDisplayedItems = () => ({
  type: ShopActionTypes.CLEAR_DISPLAYED_ITEMS,
});

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
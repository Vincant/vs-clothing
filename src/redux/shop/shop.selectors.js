import { createSelector } from 'reselect';

const selectShop = state => state.shop;
const selectDisplayedItems = state => state.shop.displayedItems;
const selectNewItems = state => state.shop.newItems;

// used in shop.component
export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);
/*
export const selectDisplayedItems = createSelector(
  [selectShop],
  shop => shop.displayedItems
);
export const selectNewItems = createSelector(
  [selectShop],
  shop => shop.newItems
);
*/
//used in collection.component
export const selectCollection = collectionUrl => createSelector(
  [selectCollections, selectDisplayedItems, selectNewItems],
  (collections, displayedItems, newItems) => {
    const collection = collections[collectionUrl] // find in object
    const items = collection.items;
    const totalItems = items.length;   
    const showItems = displayedItems + newItems;

    const filtredItems = items.filter((item, index) => 
          displayedItems <= index && index < showItems && index < totalItems)  

    const getBtnState = () => {
      return showItems < totalItems
        ? true
        : false
    }
    return {...collection, items: filtredItems, btnState: getBtnState()};
  }
);
// used in collections-overview.component
export const selectCollectionForOwerview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])  // object to array
);
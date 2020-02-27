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
    if(collections){
      const collection = collections[collectionUrl] // find in object
      const items = collection.items;
      const totalItems = items.length;   
      const maxItems = displayedItems + newItems;
      
      const filtredItems = items.filter((item, index) => 
            displayedItems <= index && index < maxItems && index < totalItems)  

      const getBtnState = () => {
        return maxItems < totalItems
          ? true
          : false
      }
      return {...collection, items: filtredItems, btnState: getBtnState()};
    } 
    else{
      return null;
    }
  }
);
// used in collections-overview.component
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections
  ? Object.keys(collections).map(key => collections[key])  // object to array
  : []  // need for fix error (if got null instead object)
);
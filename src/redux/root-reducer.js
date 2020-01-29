// import { combineReducers } from 'redux';
// import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';
// //...other Reducer here

// export default combineReducers ({  no use library redux-persist
//   user: userReducer,
//   cart: cartReducer
//   //...other Reducer here
// });

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';
//...other Reducer here

const persistConfig = {
  key: 'root',         // key = persist:root - in browser
  storage,
  whitelist: ['cart']  // user no need here
}

const rootReducer = combineReducers ({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
  //...other Reducer here
});

export default persistReducer(persistConfig, rootReducer);  // use library redux-persist
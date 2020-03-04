import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';   //need for debug
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';  // (localStorage, sessionStorage)
import thunk from 'redux-thunk';  // can reuse code

//const store = createStore(rootReducer, apllyMiddleware(logger));
//const middlewares = [logger];
const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

//export default store;
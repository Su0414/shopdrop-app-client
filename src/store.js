import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';
  import thunk from 'redux-thunk';

  import itemReducer from './reducers/itemReducer';

  const reducers = combineReducers({
    items: itemReducer
  });
  const middleware = [thunk];
  
  export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  );
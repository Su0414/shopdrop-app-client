import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';
  import thunk from 'redux-thunk';

  import manageItem from './reducers/manageItem';

  const reducers = combineReducers({
    manageItem
  });
  const middleware = [thunk];
  
  export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  );
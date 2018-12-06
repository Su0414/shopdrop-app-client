import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';
  import ReduxThunk from 'redux-thunk';

  import ItemReducer from './reducers/itemReducer';
  //import ItemFormReducer from './reducers/itemFormReducer';

  const reducers = combineReducers({
    items: ItemReducer,
    //itemFormData: ItemFormReducer
  });
  const middleware = [ReduxThunk];
  
  export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  );
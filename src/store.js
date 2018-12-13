import {
    createStore, 
    applyMiddleware,
    combineReducers
  } from 'redux';
  
  import ReduxThunk from 'redux-thunk';

  import ItemReducer from './reducers/itemReducer';
  import ItemFormReducer from './reducers/itemFormReducer';
  import ItemLikesReducer from './reducers/itemLikesReducer';
  import ShoppingBagReducer from './reducers/shoppingBagReducer';

  const reducers = combineReducers({
    items: ItemReducer,
    itemFormData: ItemFormReducer,
    likesCount: ItemLikesReducer,
    bagItems: ShoppingBagReducer
  });

  const middleware = [ReduxThunk];
 
  export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware),
  );
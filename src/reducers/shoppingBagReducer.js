// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function ShoppingBagReducer(state = {
    bagItems: []
  }
  , action) {
    switch(action.type) {
      case 'ADD_BAG_SUCCESS':
      console.log("add bag=", action, state);
      return {...state, bagItems:[...state.bagItems, action.payload]}
           

      case 'REMOVE_BAG_SUCCESS':
      return {...state, bagItems:[...state.bagItems.slice(action.payload)]}

      default:
        return state;
    }
  }
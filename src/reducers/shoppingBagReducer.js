// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function ShoppingBagReducer(state = {
    bagItems: []
  }
  , action) {
    switch(action.type) {
      case 'ADD_BAG_SUCCESS':
      return {...state,bagItems:[...state.bagItems.concat(action.payload)]}

      case 'REMOVE_BAG_SUCCESS':
      return Object.assign({}, state, {
        bagItems: [...state.bagItems.filter(item => item.id !== action.payload.id)],
      });

      default:
        return state;
    }
  }
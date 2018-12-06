export default function ItemReducer(state={
  items: []
}, action){
    switch(action.type) { 
      case 'GET_ITEMS_SUCCESS':
            return action.items;
      
      case 'CREATE_ITEM_SUCCESS':
            return state.concat(action.payload);

      case 'DELETE_ITEM_SUCCESS':
           return Object.assign([{}],{...state.filter(item => item.id !== action.payload.id)})
          
      default: return state;
    }
  }

  
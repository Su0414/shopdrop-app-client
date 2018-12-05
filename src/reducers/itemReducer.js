export default function ItemReducer(state={
  items: []
}, action){
    switch(action.type) { 
      case 'GET_ITEMS_SUCCESS':
            //console.log('get item success', action.payload)            
            return action.items;
            
      case 'CREATE_ITEM_SUCCESS':
            //console.log('create item success', action.payload)
            return {...state, items:[...state.items, action.payload]}
      default: return state;
    }
  }

  
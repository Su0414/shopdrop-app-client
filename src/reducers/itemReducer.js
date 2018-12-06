export default function ItemReducer(state={
  items: []
}, action){
    switch(action.type) { 
      case 'GET_ITEMS_SUCCESS':
            //console.log('get item success', action.payload)            
            return action.items;
            
      case 'CREATE_ITEM_SUCCESS':
            //console.log('create item success', action.payload)
            return {...state, items:[...state.items.concat(action.payload)]}

      case 'DELETE_ITEM_SUCCESS':

            console.log('delete item success', state)
            //return {...state, items:[...state.items.slice(action.payload)]}
            return Object.assign({}, ...state, 
                                    {...state.items.filter(item => item.id !== action.id)})
          
      default: return state;
    }
  }

  
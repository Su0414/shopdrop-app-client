export default function itemReducer(state={
  items: []
}, action){
    switch(action.type) { 
      case 'GET_ITEMS_SUCCESS':
            //console.log('get item success', action.payload)
            const items = action.payload;
            return { ...state, items}  

      default: return state;
    }
  }
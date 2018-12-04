export default function itemReducer(state={
  items: [], initialState
}, action){
    switch(action.type) { 
      case 'GET_ITEMS_SUCCESS':
            //console.log('get item success', action.payload)
            const items = action.payload;
            return { ...state, items}
            
      case 'CREATE_ITEM_SUCCESS':
            //console.log('create item success', action.payload)
            return {...state, items:[...state.items, action.payload]}

      default: return state;
    }
  }

  const initialState = {
    name: '', 
    price: 0, 
    image_url: '', 
    description: ''
  }
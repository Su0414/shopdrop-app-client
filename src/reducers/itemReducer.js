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
      
      case 'SORT_BYPRICE_SUCCESS':
            action.payload.sort(function (a, b) {
              return a.price - b.price;
            });
       
            return Object.assign([{}],{...state});

      default: return state;
    }
  }

  
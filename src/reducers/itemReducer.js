export default function itemReducer(state = {
          loading: false,
          items: [], 
          }
          , action){
    switch(action.type) { 
      case 'GET_ITEMS_SUCCESS':
            console.log('get item success', action.payload)
            //return {...state, loading: false, items: action.payload}
            return action.payload;    

      default: return state;
    }
  }
const initialState = {
    name: '', 
    price: 0, 
    image_url: '', 
    description: ''
  }
  
  export default function ItemFormReducer(state=
    {initialState, 
      itemFormData:[]
    }, action) {
  
    switch(action.type) {
        case 'UPDATED_ITEMFORM_DATA':
 
        const itemFormData = action.payload;
        return {...state, itemFormData:[...state.itemFormData, action.payload]}
            

        default: 
            return state;
    }
  }
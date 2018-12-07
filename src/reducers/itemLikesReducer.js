const initialState = {
    likesCount: 0
  };
  
  export default function ItemLikesReducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT_LIKES':
        return {
            likesCount: state.likesCount + 1
        };
      case 'DECREMENT_LIKES':
        return {
            likesCount: state.likesCount - 1
        };
      default:
        return state;
    }
  }
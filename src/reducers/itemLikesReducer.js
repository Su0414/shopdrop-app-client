
  export default function ItemLikesReducer(state = {
    likesCount: 0,
    likes: [], 
    dislikes: []
  }
  , action) {
    switch(action.type) {
      case 'INCREMENT_LIKES':

      // const like = { likesCount: action.likesCount + 1, itemId: action.item.itemId };
      // console.log("+=", like);
      // debugger;
      //     return { ...state,
      //       likes: [...state.likes, like]
      //     }


      console.log(state)
        return {
            likesCount: state.likesCount + 1
        };
      case 'DECREMENT_LIKES':
      console.log(state)
        return {
            likesCount: state.likesCount - 1
        };
      default:
        return state;
    }
  }
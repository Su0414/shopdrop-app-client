// import cuid from 'cuid';
// export const cuidFn = cuid;

  export default function ItemLikesReducer(state = {
    likesCount: 0
  }
  , action) {
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
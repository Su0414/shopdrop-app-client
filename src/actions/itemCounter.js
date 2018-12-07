export const incrementLikes = likesCount => {
    return {
      type: 'INCREMENT_LIKES',
      payload: likesCount
    }
  }

export const decrementLikes = likesCount => {
    return {
      type: 'DECREMENT_LIKES',
      payload: likesCount
    }
  }
export const addItemsToBag = item => {
    return {
      type: 'ADD_BAG_SUCCESS',
      payload: item
    }
  }

export const deleteItemsFromBag = item => {
    return {
      type: 'REMOVE_BAG_SUCCESS',
      payload: item
    }
  }
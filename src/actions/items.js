const API_URL = process.env.REACT_APP_API_URL;
//console.log(API_URL);

// Async Actions
export const getAllItems = () => {
    return dispatch => {
      return fetch(`${API_URL}/items`)
        .then(
          response => response.json()
        )
        .then(items => dispatch(
          {
            type: 'GET_ITEMS_SUCCESS', items: items
          }
        ))
        .catch(error => console.log(error));
    }
  }

  export const createItem = item => { 
    console.log('C')
    return dispatch => {
      return fetch(`${API_URL}/items`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: item })
      })
        .then(response => response.json())
        .then(item => {  
          console.log('D')        
          dispatch(
            {
              type: 'CREATE_ITEM_SUCCESS', payload: item
            }
          )
        })
        .catch(error => console.log(error))
    }
    console.log('E')
  }

  export const deleteItem = item => {
 
    return dispatch => {
      return fetch(`${API_URL}/items/${item}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: item })
      })
        .then(response => response.json())
        .then(item => {          
          dispatch(
            {
              type: 'DELETE_ITEM_SUCCESS', payload: item
            }
          )
        })
        .catch(error => console.log(error))
    }
  }

  export const sortItemsByPrice = items => {
    //console.log("in sort")
    return {
      type: 'SORT_BYPRICE_SUCCESS',
      payload: items
    }
  }
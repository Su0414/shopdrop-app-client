const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

// Async Actions
export const getAllItems = () => {
    console.log("in getAllitems");
    return dispatch => {
      return fetch(`${API_URL}/items`)
        .then(
          response => response.json()
        )
        .then(items => dispatch(
          {
            type: 'GET_ITEMS_SUCCESS', payload: items
          }
        ))
        .catch(error => console.log(error));
    }
  }
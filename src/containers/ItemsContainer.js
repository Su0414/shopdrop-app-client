import React from 'react'


const API_URL= process.env.REACT_APP_API_URL;
console.log(API_URL);

const ItemsContainer = {

    fetchItems: () => {
        console.log("in fetch mount");

        return fetch(`${API_URL}/items`)
                .then(response => response.json())
      }

}

export default ItemsContainer;
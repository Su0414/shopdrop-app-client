import React from 'react'
import Items from '../components/items/Items'

const ItemsService = ({items}) => {
  return (
          <div>
              <Items items = {items}/>
          </div>
    )  
}

export default ItemsService;
import React from 'react'
import Item from './item'


const Items = ({items}) => {
const renderItems = items.map(item =>             
        <p id={item.id}>
        {item.name}
        {item.price}
        </p>          
        )

        return(
            <div>
              <Item item = {renderItems}/>
            </div>
          )
        
  }

export default Items;
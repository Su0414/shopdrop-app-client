import React, { Component } from 'react'
import Item from './Item'


const Items = ({items}) => {
const renderItems = items.map(item =>             
        <span id={item.id}>
        <ul>{item.name}</ul>
        <ul>{item.price}</ul>
        </span>          
        )

        return(
            <div>
              <Item item = {renderItems}/>
            </div>
          )
        
  }

export default Items;
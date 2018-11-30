import React from 'react'
import { Link } from "react-router-dom";

import AddToCart from './addtocart';
import AddToWishListCart from './addtowishlistcart';

const Item = ({item}) => {
        return (
          <div>
              <ul>{item}</ul>
              <Link to="/addtowishlistcart">Add to your wish list</Link> || 
              <Link to="/addtocart">Add to your bag</Link> ||
          </div>
    )
  }

export default Item;
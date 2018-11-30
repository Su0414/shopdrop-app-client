import React from 'react'
import { Switch, Route } from 'react-router-dom';

import AddToCart from './AddToCart';
import AddToWishListCart from './AddToWishListCart';


const DisplayHome = () => (
  <Switch>
    <Route path="/AddToCart" component={AddToCart} />
    <Route path="/AddToWishListCart" component={AddToWishListCart} />
  </Switch>
)

export default DisplayHome;
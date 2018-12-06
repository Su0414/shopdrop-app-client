import React from 'react'
import { Switch, Route } from 'react-router-dom';

import ItemsContainer from '../containers/ItemsContainer'
import Login from '../components/items/login'
import AddToCart from '../components/items/addtocart';

const DisplayHome = () => (
  <Switch>
    <Route path="../containers/ItemsContainer" component={ItemsContainer}/>   
    <Route path="./items/addtocart" component={AddToCart} />
    <Route path="./items/login" component={Login} />
  </Switch>
)

export default DisplayHome;
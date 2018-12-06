import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Items from './items'
import Login from './login'
import AddToCart from './addtocart';


const DisplayHome = ({items}) => (
  <Switch>
    <Route path="/items" 
    component={props => <Items {...props} extra={items} />}/>
    <Route exact path="/addtocart" component={AddToCart} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default DisplayHome;
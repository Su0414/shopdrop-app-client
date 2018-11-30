import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Items from './items'
import Login from './Login'

const DisplayHome = ({items}) => (
  <Switch>
    <Route path="/items" 
    component={props => <Items {...props} extra={items} />}/>
    
    <Route path="/items" component={Items} />

    <Route path="/Login" component={Login} />
  </Switch>
)

export default DisplayHome;
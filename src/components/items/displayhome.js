import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Items from './items'
import Login from './login'
import Blog from './blog'


const DisplayHome = ({items}) => (
  <Switch>
    <Route path="/items" 
    component={props => <Items {...props} extra={items} />}/>
    <Route path="/blog" component={Blog} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default DisplayHome;
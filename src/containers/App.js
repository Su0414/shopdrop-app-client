
import React, { Component } from 'react';
import './App.css';

import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Content } from 'react-mdl';


import ItemsContainer from './ItemsContainer'
import { Switch, Route } from 'react-router-dom';

import Login from '../components/items/login'
import AddToCart from '../components/items/addtocart';
import DisplayHome from '../components/home';

class App extends Component {
  
  render() {
    return (
      <div style={{height: '800px', position: 'relative'}}>
            <Layout fixedHeader>
            
                <Header title={<span><span style={{ color: '#ddd' }}>SHOPDROP an </span><strong>Indian Dress Shop</strong></span>}>
                    <Navigation>
                      <Link to="/login">Login</Link>
                      <Link to="/home">Products</Link>                     
                      <Link to="/addtocart">Cart</Link>                                                       
                    </Navigation>                    
                </Header>
                        
                <Content>
                <div className="page-content">
                  <DisplayHome/>
                  <Switch>
                    <Route path="/home" component={ItemsContainer}/>                
                    <Route path="/addtocart" component={AddToCart} />
                    <Route path="/login" component={Login} />
                  </Switch>
                  </div>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';

import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Content, Drawer, Button } from 'react-mdl';

import ItemsContainer from './ItemsContainer'

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
                <div className="page-content" />
                <ItemsContainer/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;

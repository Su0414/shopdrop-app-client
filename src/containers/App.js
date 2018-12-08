
import React, { Component } from 'react';
import './App.css';

import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';


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
                <Footer size="micro">
                    <FooterSection type="center" logo="Shopdrop">
                        <FooterLinkList>
                           <span>Free Shipping on purchase of products $200 or more</span>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
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
                <Footer size="mini">
                    <FooterSection type="left" logo="Shopdrop">
                        <FooterLinkList>
                            <a href="#">Help</a>
                            <a href="#">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>
            

        </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';

import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Content } from 'react-mdl';

import ItemsContainer from './ItemsContainer'
import DisplayFilter from '../components/items/displayfilter'

class App extends Component {
  
  render() {
    return (
      <div style={{height: '800px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}>SHOPDROP an </span><strong>Indian Dresses Shop</strong></span>}>
                    <Navigation>
                      <Link to="/displayhome">Show Products</Link>  
                      <Link to="/login">Login</Link>               
                    </Navigation>
                </Header>        
                <DisplayFilter/>
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


import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Content } from 'react-mdl';
import ItemsContainer from './ItemsContainer'
// import Items from '../components/items/items'
import DisplayFilter from '../components/items/displayfilter'
import Blog from '../components/items/blog'

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     items: []
  //   }
  // }

  // componentDidMount(){
  //   console.log("in componenet mount")
  //   ItemsContainer.fetchItems().then(items => this.setState({items}));
  // }  

  render() {
    // console.log(this.state.items)

    return (
      <div style={{height: '800px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title={<span><span style={{ color: '#ddd' }}>SHOPDROP an </span><strong>Indian Dresses Shop</strong></span>}>
                    <Navigation>
                      <Link to="/displayhome">Show Products</Link>  
                      <Link to="/blog">Blog</Link>      
                      <Link to="/login">Login</Link>               
                    </Navigation>
                </Header>        
                <DisplayFilter/>
                <Content>
                <div className="page-content" />
                {/* <Items items={this.state.items}/> */}
                <ItemsContainer/>
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;

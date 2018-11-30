
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


import ItemsService from './services/ItemsService'
import Items from './components/items/Items'
import DisplayHome from './components/DisplayHome'
import DisplayFilter from './components/DisplayFilter'


class App extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    console.log("in componenet mount")
    ItemsService.fetchItems().then(items => this.setState({items}));
  }  

  render() {
    console.log(this.state.items)

    return (
      <div className="App">
        <Button variant="contained" color="primary">
        <h1>Indian Wedding Dresses Store</h1>
        </Button>
        <br/>
        <p><Link to="/">Show All Items</Link> ||                    
        <Link to="/AddToWishListCart">Add to your wish list</Link> || 
        <Link to="/AddToCart">Add to your bag</Link> ||
        <Link to="/">Login</Link></p>

        <Items items={this.state.items}/>
        <DisplayHome/>
        <DisplayFilter/>
        
      </div>
    );
  }
}

export default App;

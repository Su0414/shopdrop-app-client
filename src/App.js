
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";


import ItemsService from './services/ItemsService'
import DisplayHome from './components/items/displayhome'
import DisplayFilter from './components/items/displayfilter'


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
        <h1>Indian Wedding Dresses Store</h1>
        <br/>
        <p>
          <Link to="/displayhome">Show All Items</Link>        
          <br/>
          <Link to="/login">Login</Link>
        </p>

        <DisplayHome items={this.state.items}/>
        <DisplayFilter/>
        
      </div>
    );
  }
}

export default App;

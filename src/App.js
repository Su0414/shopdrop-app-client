
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import ItemsService from './services/ItemsService'
import Items from './components/items/Items'


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
        <h1>Shopping Cart</h1>
        </Button>
        <Items items={this.state.items}/>
        
      </div>
    );
  }
}

export default App;

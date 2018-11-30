import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ItemsService from './services/ItemsService'

const items = [{id:1, name:"Black", price:"189"},{id:2, name:"Purple", price:"189"},{id:3, name:"Pink", price:"189"}];


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">
        <h1>Shopping Cart</h1>
        </Button>
        <ItemsService items={items}/>
        
      </div>
    );
  }
}

export default App;

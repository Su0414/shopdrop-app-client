import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ItemsService from './services/ItemsService'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">
        <h1>Shopping Cart</h1>
        </Button>
        <ItemsService/>
        
      </div>
    );
  }
}

export default App;

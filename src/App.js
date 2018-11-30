
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ItemsService from './services/ItemsService'

const API_URL= process.env.REACT_APP_API_URL;
console.log(API_URL);

//const items = [{id:1, name:"Black", price:"189"},{id:2, name:"Purple", price:"189"},{id:3, name:"Pink", price:"189"}];


class App extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    this.fetchItems().then(items => this.setState({items}));
  }

  fetchItems(){
    return fetch('${API_URL}/items')
            .then(res => res.json())
  }

  render() {
    console.log(this.state.items)

    return (
      <div className="App">
        <Button variant="contained" color="primary">
        <h1>Shopping Cart</h1>
        </Button>
        <ItemsService items={this.state.items}/>
        
      </div>
    );
  }
}

export default App;

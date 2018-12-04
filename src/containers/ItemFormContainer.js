import React,{Component} from 'react'
import { connect } from 'react-redux';


import { updateItemFormData } from '../actions/itemForm';
import { createItem } from '../actions/items';
//import ItemInput from '../components/items/itemInput'

class ItemFormContainer extends Component {
  constructor(props) {
   
    super(props);
    //console.log("in constructor",this.props);
    this.state = {
      name: '', description: '', image_url: '', price:0.0
    };
  };

  handleOnChange(event){
    const {name, value} = event.target;
    this.setState({[name]:value});  
  }

  handleOnSubmit(event) {
    event.preventDefault();    
    this.props.createItem(this.state)
    this.setState({
      name: '', description: '', image_url: '', price:0.0
    });
  }


  render() {
 
    return (
      <div>

      <form onSubmit={event => {this.handleOnSubmit(event)}} >
<div>
      <label htmlFor="name">Name:</label>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="name"
          value={this.state.name}
           />
</div>      
<div>
      <label htmlFor="description">Description:</label>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="description"
          value={this.state.description}
           />
</div>
<div>
<label htmlFor="image_url">Image URL:</label>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          name="image_url"
          value={this.state.image_url}
           />
</div>
<div>
<label htmlFor="price">Price:</label>
        <input
          type="decimal"
          onChange={(event) => this.handleOnChange(event)}
          name="price"
          value={this.state.price}
           />                      
</div>
        <button type="submit">Add Product</button>
      </form>
    </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    itemFormData: state.itemFormData
  }
}

export default connect(mapStateToProps, {updateItemFormData, createItem})(ItemFormContainer)
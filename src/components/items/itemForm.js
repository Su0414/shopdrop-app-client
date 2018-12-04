import React, { Component } from 'react';

class ItemForm extends Component {


  handleOnChange(event) {
      console.log(event)

  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("on submit", event)
   
  }

  render() {
    const { name, description, price, image_url } = {name: 'new Item', description: "desc", price: 200,image_url: "url"}
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
        <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input 
              type="textarea"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input 
              type="decimal"
              onChange={this.handleOnChange}
              name="price"
              value={price}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image Url:</label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="image_url"
              value={image_url}
            />
          </div>
          

          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
};

export default ItemForm;
import React, { Component } from 'react';

class ItemInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  };

  handleOnSubmit(event) {
    event.preventDefault();    
    const currentItemFormData = Object.assign({}, 
      this.props.itemFormData, {
      name: this.state.name
    })
    this.props.updateItemFormData(currentItemFormData)

    this.props.createItem(this.state.name)
    this.setState({
      name: ''
    });
  }

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" value="Add Item"/>
        </form>
      </div>
    );
  }
};

export default ItemInput;
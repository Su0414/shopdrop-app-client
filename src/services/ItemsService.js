import React, { Component } from 'react'
import Items from '../components/items/Items'

class ItemsService extends Component {
    render() {
        return (
          <div>
              <Items items = {this.props.items}/>
          </div>
    )
  }
}
  const mapStateToProps = state => ({ items: state.items })

  export default ItemsService;
import React,{Component} from 'react'
import { connect } from 'react-redux';

import { getAllItems } from '../actions/items';
import Item from '../components/items/item'

class ItemsContainer extends Component {
    state 

    componentDidMount() {
        this.props.getAllItems()
    }

    render() {
        console.log(this.props.items)

        return (
          <div className="ItemsContainer">
            <h1>All Items</h1>
          </div>
        );
    }  

}

const mapStateToProps = (state) => {
    return ({
      items: state.items
    })
  }

export default connect(mapStateToProps, {getAllItems})(ItemsContainer);
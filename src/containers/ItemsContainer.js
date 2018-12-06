import React,{Component} from 'react'
import { connect } from 'react-redux';

import { getAllItems } from '../actions/items';
import { deleteItem } from '../actions/items';

import Items from '../components/items/items';
import ItemFormContainer from './ItemFormContainer';

class ItemsContainer extends Component {
  
    componentDidMount() {
        this.props.getAllItems();
    }
    render() {
        return (
          <div className="ItemsContainer">         
            <ItemFormContainer/>
            <Items 
                  items={this.props.items}
                  deleteItem={this.props.deleteItem}
            />
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
      items: state.items
    })
  }

export default connect(mapStateToProps, {getAllItems, deleteItem})(ItemsContainer);
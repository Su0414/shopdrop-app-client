import React,{Component} from 'react'
import { connect } from 'react-redux';

import { getAllItems } from '../actions/items';
import { deleteItem } from '../actions/items';

import Items from '../components/items/items';
import ItemFormContainer from './ItemFormContainer';
import ItemCounterContainer from './ItemCounterContainer';


class ItemsContainer extends Component {
  
    componentDidMount() {
        this.props.getAllItems();
    }
    render() {
        return (
          <div className="ItemsContainer">
                  
            <ItemFormContainer/>
            <ItemCounterContainer/>
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
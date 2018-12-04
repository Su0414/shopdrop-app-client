import React,{Component} from 'react'
import { connect } from 'react-redux';

import { getAllItems } from '../actions/items';
import Items from '../components/items/items';
import ItemFormContainer from './ItemFormContainer';

class ItemsContainer extends Component {
    
    componentDidMount() {
        this.props.getAllItems()
    }

    render() {
        //console.log(this.props.items)

        return (
          <div className="ItemsContainer">
            <h1>Add new product</h1>
            <ItemFormContainer/>
            <Items items = {this.props}/>
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
import React,{Component} from 'react'
import { connect } from 'react-redux';

import ItemForm from '../components/items/itemForm'
import { createItem } from '../actions/items';


class ItemFormContainer extends Component {

render(){
    return(
        <div>
            <ItemForm itemFormData = {this.props.itemFormData}/>
        </div>
    )
    }
}

const mapStateToProps = state => {
    return {
      itemFormData: state.itemFormData
    }
  }

export default connect(mapStateToProps, {createItem})(ItemFormContainer);

import React,{Component} from 'react'
import { connect } from 'react-redux';

import { getAllItems } from '../actions/items';
import Items from '../components/items/items';
import ItemFormContainer from './ItemFormContainer';

class ItemsContainer extends Component {
  
    componentDidMount() {
        this.props.getAllItems();
    }
    render() {
      // console.log("in container",this.props.items)
        return (
          <div className="ItemsContainer">
            <ItemFormContainer/>
            <Items items={this.props.items}/>
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
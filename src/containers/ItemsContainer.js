import React,{Component} from 'react'
import { connect } from 'react-redux';

import { getAllItems } from '../actions/items';
import Item from '../components/items/item'


// const API_URL= process.env.REACT_APP_API_URL;
// console.log(API_URL);

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.getAllItems()
    }

    // fetchItems: () => {
    //     console.log("in fetch mount");

    //     return fetch(`${API_URL}/items`)
    //             .then(response => response.json())
    //   }

    render() {
        console.log(this.props)
        // const items_list = this.props.items.map(item => {
        //     return (<Item item={item}/>)
        // });
        return (
          <div className="ItemsContainer">
            <h1>All Items</h1>
            {/* {items_list} */}
          </div>
        );
    }  

}

const mapStateToProps = (state) => {
    return ({
      items: state.items
    })
  }

// const mapDispatchToProps = dispatch => ({
//     getAllItems: items => dispatch({type: 'GET_ITEMS_SUCCESS'})
   
// })  

export default connect(mapStateToProps, {getAllItems})(ItemsContainer);
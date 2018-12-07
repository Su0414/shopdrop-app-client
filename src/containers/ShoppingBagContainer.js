import React,{Component} from 'react'
import { Button } from 'react-mdl';
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

import { addItemsToBag } from '../actions/shoppingBag';
import { deleteItemsFromBag } from '../actions/shoppingBag';

import AddToCart from '../components/items/addtocart'

class ShoppingBagContainer extends Component {

  addItemsToBag = (event) => {    
    this.props.addItemsToBag(this.props.item)
  }

  deleteItemsFromBag = (event) => {   
     this.props.deleteItemsFromBag(this.props.item)
  }

    render() {   

     //console.log("in cont=",this.props.bagItems)
     const {bagItems} = this.props.bagItems;
     
      
        return (
          <div>              
              <Button colored onClick={(event) => this.addItemsToBag(event)}>Add To Cart</Button>
              <Button colored onClick={(event) => this.deleteItemsFromBag(event)}>Remove From Cart</Button>

              <span>
              <Link to={{pathname: "/addtocart" 
                      }}
              >Show Cart</Link>
              
              
              </span>   
          </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bagItems: state.bagItems
  }
}

export default connect(mapStateToProps, {addItemsToBag, deleteItemsFromBag})(ShoppingBagContainer)
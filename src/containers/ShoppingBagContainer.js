import React,{Component} from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-mdl';

class ShoppingBagContainer extends Component {
  state = { 
      cartCount: 0, 
      bagItems: []

}
  addToBagItems = (event) => {
     this.setState({
        cartCount: this.state.cartCount + 1,
        bagItems: [...this.state.bagItems, this.props.item ]
    });
  }

  deleteFromBagItems = (event) => {
     this.setState({
        cartCount: this.state.cartCount - 1
     });
  }


    render() {   
        return (
          <div>              
              <Button colored onClick={(event) => this.addToBagItems(event)}>Add To Cart</Button>
              <Button colored onClick={(event) => this.deleteFromBagItems(event)}>Remove From Cart</Button>

              <span>Bag Count=
              {this.state.cartCount}
              
              </span>   
          </div>
    )
  }
}


export default ShoppingBagContainer
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Badge, Card, CardTitle, CardText, CardActions, Button, CardMenu, Icon } from 'react-mdl';

import ItemCounterContainer from '../../containers/ItemCounterContainer';
import ShoppingBagContainer from '../../containers/ShoppingBagContainer';

class Item extends Component {
  constructor(props){
    super(props);

    this.state = {
      likeCounter: 0
    }
  }
  
  handleOnClick(event){    
    this.props.deleteItem(this.props.item.id);
  }

  handleLike(event){    
     
    this.setState({
      likeCounter : this.state.likeCounter + 1
    })
  }

render(){
        const {item} = this.props  
        return (
          <div key={item.id} > 
            <Card   shadow={5} style={{minWidth: '100%', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${item.image_url}) center / cover`}} >
                <Link to="/#">{item.name}</Link> 
              </CardTitle>
              <CardText>              
                Product Details: {item.description}  <br/>               
                Price: $ {item.price} <br/>
                Web ID: # {item.id}         

                <Button colored onClick={(event) => this.handleLike(event)}>Like</Button> 
                {this.state.likeCounter}
                {/* <ItemCounterContainer itemId={item.id}/> */}
              </CardText>
              <CardActions border>

                <ShoppingBagContainer item={item}/>

                <Button colored onClick={(event) => this.handleOnClick(event)}>Delete Item</Button>              
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
              
              <Badge text={this.props.likesCount} overlap>
                    <Icon name="likes_box" />
              </Badge>
            
              </CardMenu>
            </Card>
          </div>
    )
  }
}



export default Item;
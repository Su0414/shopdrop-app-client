import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Badge, Card, CardTitle, CardText, CardActions, Button, CardMenu, Icon } from 'react-mdl';

import ItemCounterContainer from '../../containers/ItemCounterContainer';

import ShoppingBagContainer from '../../containers/ShoppingBagContainer';

class Item extends Component {
  
  handleOnClick(event){    
    this.props.deleteItem(this.props.item.id);
  }

render(){

        const {item} = this.props
  
        return (
          <div key={item.id} > 
            <Card   shadow={5} style={{minWidth: '100%', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: `url(${item.image_url}) center / cover`}} >
                <Link to="/item">{item.name}</Link> 
              </CardTitle>
              <CardText>              
                Item Details: {item.description}  <br/>               
                Price: {item.price} <br/>
                # {item.id}              
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
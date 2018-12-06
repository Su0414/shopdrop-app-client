import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Badge, Card, CardTitle, CardText, CardActions, Button, CardMenu, Icon } from 'react-mdl';

import AddToCart from './addtocart';

class Item extends Component {
  handleOnClick(){
    //console.log("in delete click",this.props);
    this.props.deleteItem(this.props.item.id);
  }
render(){

        const {item} = this.props
  
        return (
          

          <div key={item.id} >             

          <Card   shadow={5} style={{minWidth: '100%', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url({item.image_url}) center / cover'}} >
              <Link to="/item">{item.name}</Link> # {item.id}
            </CardTitle>
            <CardText>              
              Item Details: {item.description}  <br/>               
              Price: {item.price} <br/>
              Item No: {item.id}       
            </CardText>
            <CardActions border>
              <Button colored>Add Cart</Button>
              <Button colored onClick={() => this.handleOnClick()}>Delete Item</Button>              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <Badge text="♥" overlap>
                  <Icon name="account_box" />
              </Badge>
            </CardMenu>
          </Card>

          </div>
    )
  }
}

export default Item;
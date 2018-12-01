import React from 'react'
import { Link } from "react-router-dom";
import { Badge, Card, CardTitle, CardText, CardActions, Button, CardMenu, Icon } from 'react-mdl';

import AddToCart from './addtocart';

const Item = ({item}) => {
        return (
          <div>             

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url({item.image_url}) center / cover'}} ><Link to="/item">{item.name}</Link> #{item.id}</CardTitle>
            <CardText> 
              {item.description}                 
              {item.price}        
            </CardText>
            <CardActions border>
              <Button colored>Add Cart</Button> 
              
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

export default Item;
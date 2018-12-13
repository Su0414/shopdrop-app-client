import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Badge, Card, CardTitle, CardText, CardActions, Button, CardMenu, Icon } from 'react-mdl';

import ItemCounterContainer from '../../containers/ItemCounterContainer';
import ShoppingBagContainer from '../../containers/ShoppingBagContainer';

const API_URL = process.env.REACT_APP_API_URL;


class Item extends Component {
  constructor(props){
    super(props);

    this.state = {
      likes_count: 0
    }
  }
  
  handleOnClick(event){    
    this.props.deleteItem(this.props.item.id);
  }

  
  handleOnLike(event){

    this.state=({
      likes_count: this.state.likes_count + 1
    })
    const likesData = {
      name: this.props.item.name,
      description: this.props.item.description,
      price: this.props.item.price,
      likes_count: this.state.likes_count + 1
    }    

    console.log("data", likesData)

    fetch(`${API_URL}/items/${this.props.item.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ item: likesData })
        })
          .then(response => response.json())
          .catch(error => console.log(error))
        

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

                <Button colored onClick={(event) => this.handleOnLike(event)}>Like</Button> 
                
                Likes : {item.likes_count}

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
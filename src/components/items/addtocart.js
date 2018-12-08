import React, {Component} from 'react'
import {List, ListItem, ListItemContent, Grid, Cell, DataTable, TableHeader, Button} from 'react-mdl';

class AddToCart extends Component{
  
  render(){
          const { bagItems } = this.props.location.state
          const listItems = bagItems.map((item) =>{
            return  (
                      <List>
                        <ListItem>
                            <ListItemContent>
                              <Button style={{color: '#fff', height: '100px', background: `url(${item.image_url}) center / cover`}} ></Button>
                              <span>Product Name: {item.name}</span><br/>
                              <span>Price: {item.price}</span>
                              <span></span><span></span><span></span>
                              <span><Button colored >Remove</Button></span>
                            </ListItemContent > 
                          </ListItem>      
                        </List>
            )}
          );

         return (
                <Grid className="demo-grid-1">
                  <Cell col={2}>
                    <h3>Shopping Bag</h3>
                  </Cell>

                  <Cell col={8}>
                    <h3>Your Products Here</h3>                  
                      {listItems}
                  </Cell>

                  <Cell col={2}>
                    <Button raised colored>Checkout</Button>
                  </Cell>
                </Grid>
                         
    );
  }
}

export default AddToCart;
import React, { Component } from 'react';
import { Button, Tabs, Tab, Grid, Cell} from 'react-mdl';

import Item from './item'

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  handleSort(event){
    console.log("in handle sort" , this.props.items);
  }

  render() {
    const {items, item, deleteItem} = this.props;
   
    
    const items_list = Object.values(items).map(item => {    
      return (<Item key={item.id} 
                    item={item}
                    deleteItem={deleteItem}/>)
    });
     
    return(
      <div>
        <Grid >
        <Cell col={1}></Cell>
            <Cell col={10}>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>All</Tab>
              <Tab>For Her</Tab>
              <Tab>For Him</Tab>
              <Tab>Kids</Tab>
            </Tabs>

              <div className="content">                      
                            

              <div style={{width: '100%', margin: 'auto'}}>
              <Button onClick={(event) => this.handleSort(event)}>               
                SortBy Price
              </Button>

                <div className="products-grid">

                  {items_list}
                  
                </div>
              </div>
          </div>
            </Cell>
            <Cell col={1}></Cell>
        </Grid>      
          
      </div>
    )
  }
}
export default Items;
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';

import Item from './item'

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    console.log(this.props)
    // const items_list = this.props.items.map(item => {
    //   return (<Item item={item}/>)
    // });

    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          <Tab>For Her</Tab>
          <Tab>For Him</Tab>
          <Tab>Kids</Tab>
        </Tabs>
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid>
              <Cell col={12}>
                <div className="content">
                  <div className="products-grid">
                    {/* {items_list} */}
                  </div>
                </div>
                
              </Cell>
            </Grid>
          </div>
      </div>
    )
  }
}
export default Items;
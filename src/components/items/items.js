import React, { Component } from 'react';
import { Icon, Badge, Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  renderItems = this.props.items.map(item =>             
    <p id={item.id}>
    {item.name}
    {item.price}
    </p>          
    )

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="products-grid">
          {/* Item 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://assets.panashindia.com/media/catalog/product/cache/1/small_image/262x377/9df78eab33525d08d6e5fb8d27136e95/3/9/398kr02-675-1002.jpg) center / cover'}} >Item #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
          {/* Item 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://assets.panashindia.com/media/catalog/product/cache/1/small_image/262x377/9df78eab33525d08d6e5fb8d27136e95/3/9/398kr03-675-1003.jpg) center / cover'}} >Item #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
          {/* Item 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://assets.panashindia.com/media/catalog/product/cache/1/small_image/262x377/9df78eab33525d08d6e5fb8d27136e95/3/9/398kr04-675-1004.jpg) center / cover'}} >Item #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is For her</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is For him</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is For kids</h1></div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          <Tab>For Her</Tab>
          <Tab>For Him</Tab>
          <Tab>Kids</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Items;
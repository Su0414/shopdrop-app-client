import React,{Component} from 'react'
import { connect } from 'react-redux';
import { Button } from 'react-mdl';

import { incrementLikes } from '../actions/itemCounter';
import { decrementLikes } from '../actions/itemCounter';

class ItemCounterContainer extends Component {

  incrementLikes = (event) => {
 
    const { name, value } = event.target;
    const currentLikesData = Object.assign({}, this.props.likesCount, {
      [name]: value
    })
    this.props.incrementLikes(currentLikesData);
  }

  decrementLikes = (event) => {
  
    const { name, value } = event.target;
    const currentLikesData = Object.assign({}, this.props.likesCount, {
      [name]: value
    })
    this.props.decrementLikes(currentLikesData);
  }


    render() {   
        const cnt = this.props.likesCount 
        const cnt_arr = Object.values(this.props.likesCount)  
        
        return (
          <div>    
             
              
              <Button colored onClick={(event) => this.incrementLikes(event)}>Like</Button>
              <Button colored onClick={(event) => this.decrementLikes(event)}>DisLike</Button> 
          
              <span>{cnt_arr}</span>   
          </div>
    )
  }
}
const mapStateToProps = state => {
  return {
     likesCount: state.likesCount
  }
}

export default connect(mapStateToProps, {incrementLikes, decrementLikes})(ItemCounterContainer)
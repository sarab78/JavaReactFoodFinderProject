import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class InOutContainer extends Component{


  componentDidMount() {
    this.props.getRecipeList();
    this.props.getRestaurantList();
  }



  // const handleClick = (event) => {
  //   props.getRecipeList()
  // }

  render(){
    return(
    <div>
      <h3>Choose Your Menu</h3>
        <Link to='/in'>
          <button type='button'>EAT IN</button>
        </Link>
        <Link to='/out'>
          <button type='button'>EAT OUT</button>
        </Link>
    </div>
  )
};

}

export default InOutContainer;

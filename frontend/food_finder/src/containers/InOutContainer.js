import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class InOutContainer extends Component{


  componentDidMount() {
    this.props.getRecipeList()
  }

  // const handleClick = (event) => {
  //   props.getRecipeList()
  // }

  render(){
    return(
    <div>
      <p>TestIn/Out</p>
        <Link to='/in'>
          <button  type='button'>IN</button>
        </Link>
        <Link to='/out'>
          <button type='button'>OUT</button>
        </Link>
    </div>
  )
};

}

export default InOutContainer;

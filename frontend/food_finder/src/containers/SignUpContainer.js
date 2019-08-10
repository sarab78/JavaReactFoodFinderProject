import React, {Component} from 'react';
import SignUpForm from '../components/SignUpForm'

class SignUpContainer extends Component {

  constructor(props){
    super(props);
    this.createNewUser = this.createNewUser.bind(this);
  }

  createNewUser(user) {
      this.props.signUpMain(user);
  }

// Pull ingredients and cuisine from db as list as pass as props to Form 

  render(){
    return(
        <div>
          <h1>FoodFinder</h1>
          <p>Please sign up to our service below</p>
          <SignUpForm signUpContainer={this.createNewUser}/>
        </div>
    )
  }
};

export default SignUpContainer;

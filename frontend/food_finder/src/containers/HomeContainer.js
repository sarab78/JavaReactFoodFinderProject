import React, {Component} from 'react'
import Request from '../helpers/Request'
import SignIn from '../components/SignIn'

class HomeContainer extends Component {
    constructor(props){
      super(props);
      this.findUserByIdHome = this.findUserByIdHome.bind(this);
      this.redirectSignUp = this.redirectSignUp.bind(this);
    }

    findUserByIdHome(id){
      this.props.findUserByIdMain(id);
    }

    redirectSignUp(){
      this.props.switchToSignUpContainer();
    }


    render(){
      return (
        <div className="home-content">
          <h1>FoodFinder</h1>
          <p>All about FoodFinder</p>
          <SignIn handleSignIn={this.findUserByIdHome}/>
          <button onClick={this.redirectSignUp}>Sign Up</button>
        </div>
      )
    }

}

export default HomeContainer

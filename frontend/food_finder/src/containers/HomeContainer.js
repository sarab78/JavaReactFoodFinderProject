import React, {Component} from 'react'
import Request from '../helpers/Request'
import SignIn from '../components/SignIn'
import './HomeContainer.css'

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
        <div className="content">
          <h1>Din or Out?</h1>
        <div className="home-text">
          <p>Never know what to do for food each day? </p>
          <p>Always in two minds about wether to dine in or dine out? </p>
          <p>Why not let D-In or Out take the hassle out of decision making and suggest what you can do for dinner tonight!</p>
          <p>Enter your user id or click sign up to get started!</p>
        </div>
        <div className="options">
        <div className="sign-in">
          <SignIn handleSignIn={this.findUserByIdHome}/>
        </div>
        <div className="sign-up">
          <button onClick={this.redirectSignUp}>Sign Up</button>
        </div>
        </div>
        </div>
        </div>
      )
    }

}

export default HomeContainer

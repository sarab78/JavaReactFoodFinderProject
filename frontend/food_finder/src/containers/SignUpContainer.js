import React, {Component} from 'react';
import SignUpForm from '../components/SignUpForm'
import Request from '../helpers/Request'
import './SignUpContainer.css'
import {Link} from 'react-router-dom';

class SignUpContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      cuisineTypes: [],
      ingredients: []
    }
    this.createNewUser = this.createNewUser.bind(this);
    this.showButton = this.showButton.bind(this)
  }

  componentDidMount(){
  const request = new Request()

  const promise1 = request.get('/cuisineTypes');
  const promise2 = request.get('/ingredients');
  const promises = [promise1, promise2]

  Promise.all(promises).then((data) => {
    // debugger
    // console.log(data);
    this.setState({
      cuisineTypes: data[0]._embedded.cuisineTypes,
      ingredients: data[1]._embedded.ingredients,
    });
  })
}

// componentDidMount(){
//  const getIngredients =  (() => {
//          const url = "/ingredients"
//          const request = new Request()
//          request.get(url)
//          .then(ingredients => {
//            console.log(ingredients)
//          }
//        )
//          // .then(user => this.setState({user: user}))
//          .catch(err => console.log(err))})
//  getIngredients()
//  }

  createNewUser(user) {
      this.props.signUpMain(user);
  }

    showButton() {
     if(!this.props.user) return null;
     return (
       <div className = "in-out-redirect">
       <Link to='/in-out'>
       <button type="button">Go!</button>
       </Link>
       </div>
     )
  }

// Pull ingredients and cuisine from db as list as pass as props to Form

  render(){
    return(
        <div className="sign-up-content">
          <h1>D-In or Out</h1>
          <p>Please sign up to our service below</p>
          <SignUpForm signUpContainer={this.createNewUser} cuisineTypes={this.state.cuisineTypes} ingredients={this.state.ingredients} redirectButton={this.showButton}/>
          {this.showButton()}
        </div>
    )
  }
};

export default SignUpContainer;

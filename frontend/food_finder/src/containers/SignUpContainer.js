import React, {Component} from 'react';
import SignUpForm from '../components/SignUpForm'
import Request from '../helpers/Request'

class SignUpContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      cuisineTypes: [],
      ingredients: []
    }
    this.createNewUser = this.createNewUser.bind(this);
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

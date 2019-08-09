import React, {Component} from 'react'
import Request from '../helpers/Request'
import HomeContainer from './HomeContainer'
import SignIn from '../components/SignIn'
import SignUpContainer from './SignUpContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class MainContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
        user: null,
      }
      this.findUserById = this.findUserById.bind(this)
      this.createNewUser = this.createNewUser.bind(this)
    }


    findUserById(id){
      const url = "/api/users/"+id
      const request = new Request
      request.get(url)
      .then(user => this.setState({user: user}))
      .catch(err => console.error)

          {/*Test above after db set up*/}
    }


//Called by props in sign-up component, used to generate new user then asign to state.user
    createNewUser(user){
      const url = "/api/users"
      const request = new Request
      request.post(user)
      .then(user => this.setState({user: user}))
      .catch(err => console.error)
    }


//Create Router to change bewtween Home screen and sign up screen
//remove Home screen functionality to main class.
//enable functions to be called and passed through home then sign up.
    render(){
      return (
        <div className="main-app">
         <Router>
          <Switch>
            <Route exact path="/home"
            render={() => <HomeContainer user={this.state.user} />}
            />
            <Route exact path="/new"
            render={() => <SignUpContainer signUpMain={this.createNewUser} />}
            />
          <Switch>
         </Router>

        </div>
      )
    }

}

export default MainContainer

import React, {Component} from 'react'
import Request from '../helpers/Request'
import HomeContainer from './HomeContainer'
import SignIn from '../components/SignIn'
import SignUpContainer from './SignUpContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InOutContainer from './InOutContainer'
import InContainer from './eat_in/InContainer'
import InRecipeContainer from './eat_in/InRecipeContainer'


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
      .then(window.location = '/in-out');

          {/*Test above after db set up*/}
    }


//Called by props in sign-up component, used to generate new user then asign to state.user
    createNewUser(user){
      const url = "/api/users"
      const request = new Request
      request.post(url, user)
      .then(user => this.setState({user: user}))
      .catch(err => console.error)
      .then(window.location = '/in-out');

        {/* above does not have id, which needs to be returned from db */}
    }

//Button on home to re-direct to create new user
    viewNew(){
      window.location = '/new';
    }



    render(){
      return (
        <div className="main-app">
         <Router>
          <Switch>
            <Route exact path="/home"
            render={() => <HomeContainer findUserByIdMain={this.findUserById} switchToSignUpContainer={this.viewNew}/>}
            />
            <Route exact path="/new"
            render={() => <SignUpContainer signUpMain={this.createNewUser} />}
            />
                        {/* change above address to have user id */}

            <Route exact path="/in-out"
            render={() => <InOutContainer user={this.user} />}
            />

            <Route  path="/in"
            render={() => <InContainer user={this.user} />}
            />


          </Switch>
         </Router>
        </div>
      )
    }

}

export default MainContainer

import React, {Component} from 'react'
import Request from '../helpers/Request'
import SignIn from '../components/SignIn'
import SignUpContainer from './SignUpContainer'

class HomeContainer extends Component {
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

    render(){
      return (
        <div className="home-content">
          <h1>FoodFinder</h1>
          <p>All about FoodFinder</p>
          <SignIn handleSignIn={this.findUserById}/>
          <SignUpContainer handleSignUp=(this.createNewUser)/>
        </div>
      )
    }

}

export default HomeContainer

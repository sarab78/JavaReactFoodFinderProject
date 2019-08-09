import React, {Component} from 'react'
import Request from '../helpers/Request'
import SignIn from '../components/SignIn'

class HomeContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
        user: null
      }
      this.findUserById = this.findUserById.bind(this)
    }


    findUserById(id){
      const url = "/api/users/"+id
      const request = new Request
      request.get(url)
      .then(user => this.setState({user: user}))
      .catch(err => console.error)
      
          {/*Test above after db set up*/}
    }

    render(){
      return (
        <div className="home-content">
        <h1>FoodFinder</h1>
        <p>All about FoodFinder</p>
        <SignIn handleSignIn={this.findUserById}/>
        </div>
      )
    }

}

export default HomeContainer

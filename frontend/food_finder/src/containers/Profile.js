import React, { Component } from 'react';
import ProfileDetails from '../components/ProfileDetails'
import Request from '../helpers/Request'

class Profile extends Component {

    constructor(props){
      super(props);
      this.state = {
        cuisineTypes: [],
        ingredients: []
      }
      this.updateUserMain = this.updateUserMain.bind(this);
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

  updateUserMain(updatedUser) {
    this.props.updateUserMain(updatedUser);
  }


  render() {
    return (
      <div>
          <div>
              <h3>Your Profile</h3>
          </div>
          <div>
            <ProfileDetails user={this.props.user} cuisines={this.state.cuisineTypes} ingredients={this.state.ingredients} updateUserDetails={this.updateUserMain}/>
          </div>
          <div>
            {/* List of Reciepies */}
            {/* List of Restaurants */}
          </div>
      </div>
    );
  }

}

export default Profile;

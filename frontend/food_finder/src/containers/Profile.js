import React, { Component } from 'react';
import ProfileDetails from '../components/ProfileDetails'
import FavRecipies from '../components/FavRecipies'
// import FavRecipies from '../components/FavRecipies'
import Request from '../helpers/Request'
import Urls from '../helpers/keys/Urls'

class Profile extends Component {

    constructor(props){
      super(props);
      this.state = {
        cuisineTypes: [],
        ingredients: [],
        recipesFav: [],
        restaurantFav: []
      }
      this.updateUserMain = this.updateUserMain.bind(this);
    }

    componentDidMount(){
    const url = new Urls
    const request = new Request()
    const promise1 = request.get('/cuisineTypes');
    const promise2 = request.get('/ingredients');
    const promises = [promise1, promise2]

    const recipeAPI = this.props.user.recipeId;
    const restaurantAPI = this.props.user.restaurantId;

    Promise.all(promises).then((data) => {
      this.setState({
        cuisineTypes: data[0]._embedded.cuisineTypes,
        ingredients: data[1]._embedded.ingredients,
      });
    })

    let favouriteRecipies = []
    console.log(recipeAPI);
    {for (let l_recipe of recipeAPI){
        fetch(url.getRecipeById(l_recipe))
        .then(res => res.json())
        .then(recipe => (favouriteRecipies.push(recipe)))
        .catch(err => console.log(err));
    }
      (this.setState({recipesFav: favouriteRecipies}))}
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
            <FavRecipies user={this.props.user} recipesFav={this.state.recipesFav}/>
            {/* List of Reciepies */}
            {/* List of Restaurants */}
          </div>
      </div>
    );
  }

}

export default Profile;

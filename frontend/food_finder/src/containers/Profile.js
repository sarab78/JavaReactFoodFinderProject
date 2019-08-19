import React, { Component } from 'react';
import ProfileDetails from '../components/ProfileDetails'
import FavRecipies from '../components/FavRecipies'
import FavRestaurants from '../components/FavRestaurants'
import Request from '../helpers/Request'
import Urls from '../helpers/keys/Urls'
import NavBar from '../NavBar'
import './Profile.css'

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
      // const checkRecipeAPI = this.props.user.recipeId
      // const checkRestaurantAPI = this.props.user.restaurantId

      const recipeAPI = this.props.user.recipeId;

      const restaurantAPI = this.props.user.restaurantId;


      Promise.all(promises).then((data) => {
        this.setState({
          cuisineTypes: data[0]._embedded.cuisineTypes,
          ingredients: data[1]._embedded.ingredients,
        });
      })

      let favouriteRecipies = [];
      if (!this.props.user.recipeId) {
      return null } else {
      {for (let l_recipe of recipeAPI){
          fetch(url.getRecipeById(l_recipe))
          .then(res => res.json())
          .then(recipe => (favouriteRecipies.push(recipe)))
          .catch(err => console.log(err));
      }
        (this.setState({recipesFav: favouriteRecipies}))}
      }

      let favouriteRestaurants = [];
      if (!this.props.user.restaurantId) {
        return null } else {
      for (let l_restaurant of restaurantAPI){
         fetch(url.urlRestaurantById(l_restaurant))
        .then(res => res.json())
        .then(restaurant => (favouriteRestaurants.push(restaurant)))
          // .then(result => console.log(result))
        .catch(err => console.log(err));
      }
        (this.setState({restaurantFav: favouriteRestaurants}))
      }

  }

  updateUserMain(updatedUser) {
    this.props.updateUserMain(updatedUser);
  }


  render() {
    return (
      <div className="profile">
          <NavBar/>
          <div>
              <h3>Your Profile</h3>
          </div>
          <div className="profile-content">
            <ProfileDetails user={this.props.user} cuisines={this.state.cuisineTypes} ingredients={this.state.ingredients} updateUserDetails={this.updateUserMain}/>
          </div>
          <div className="profile-lists">
            <div>
            <FavRecipies user={this.props.user} recipesFav={this.state.recipesFav}/>
            </div>
            <div>
            <FavRestaurants user={this.props.user} restaurantFav={this.state.restaurantFav}/>
            </div>
          </div>
      </div>
    );
  }

}

export default Profile;

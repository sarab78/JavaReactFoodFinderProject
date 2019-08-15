import React, {Component} from 'react'
import Request from '../helpers/Request'
import HomeContainer from './HomeContainer'
import SignIn from '../components/SignIn'
import SignUpContainer from './SignUpContainer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InOutContainer from './InOutContainer'
import InContainer from './eat_in/InContainer'
import InRecipeContainer from './eat_in/InRecipeContainer'
import OutContainer from './eat_out/OutContainer'
import OutRestaurantContainer from './eat_out/OutRestaurantContainer'
import Profile from './Profile'
import Urls from '../helpers/keys/Urls'
import './MainContainer.css'


class MainContainer extends Component {
    constructor(props){
      super(props)
      this.state = {
        user: null,
        recipiesList: [],
        selectedRecipe: null,
        restaurantList: [],
        selectedRestaurant: null
      }

      this.findUserById = this.findUserById.bind(this);
      this.createNewUser = this.createNewUser.bind(this);
      this.getRecipeList = this.getRecipeList.bind(this);
      this.findSelectedRecipe = this.findSelectedRecipe.bind(this);
      this.getRestaurantList = this.getRestaurantList.bind(this);
      this.findSelectedRestaurant = this.findSelectedRestaurant.bind(this);
      this.addToRecipeFav = this.addToRecipeFav.bind(this);
      this.addToRestaurantFav = this.addToRestaurantFav.bind(this);
      this.updateProfileUser = this.updateProfileUser.bind(this);
      this.findRandomRecipe = this.findRandomRecipe.bind(this);
    }

//Log in details from Home page
    findUserById(id){
      // console.log("test-signin");
      const url = "/users/"+id
      const request = new Request()
      request.get(url)
      .then(user => this.setState({user: user}))
      .catch(err => console.error)
      // .then(Redirect to='/in-out')

    }
    createNewUser(user){
      const url = "/users"
      const request = new Request
      request.post(url, user)
      .then(newUser => this.setState({user: newUser}))
      .catch(err => console.error)
      // .then(Redirect to='/in-out');

        {/* above does not have id, which needs to be returned from db */}
    }
    //Button on home to re-direct to create new user
      viewNew(){
        window.location = '/new';
      }


//recipe for eat in, from InOutContainer
    getRecipeList(){
      const url = new Urls
      let ingredients = this.state.user._embedded.ingredient.name;
      // const addIngredients = () => {for (let ingredient of  this.state.user._embedded.ingredients) {
      //   ingredients += ingredient.name + ","
      // } ingredients = ingredients.slice(0, -1)}
      // addIngredients();
      fetch(url.urlIngredients() + ingredients)
      .then(res => res.json())
      .then(recipies => this.setState({recipiesList: recipies.meals}))
      .catch(err => console.log(err));
    }
    findSelectedRecipe(id) {
      const url = new Urls
      fetch(url.getRecipeById(id))
      .then(res => res.json())
      .then(recipies => this.setState({selectedRecipe: recipies.meals[0]}))
      // .then(window.location = '/in/recipe')
      .catch(err => console.log(err));

    }

    findRandomRecipe(){
      const url = new Urls
      fetch(url.getRecipeRandom())
      .then(res => res.json())
      .then(recipies => this.setState({selectedRecipe: recipies.meals[0]}))
      .catch(err => console.log(err));
    }


//restaurant for eat out, from InOutContainer
    getRestaurantList(){
      const url = new Urls
      let cuisineId = this.state.user._embedded.cuisine.cuisine_id;
      // const setCuisineId = () => {for (let cuisine of  this.state.user._embedded.cuisines){
      //   cuisineId += cuisine.cuisine_id + '%2C'
      // } cuisineId = cuisineId.slice(0, -3)}
      //
      // setCuisineId()
      fetch(url.urlRestaurantCusine() + cuisineId)
      .then(res => res.json())
      .then(restuarants => this.setState({restaurantList: restuarants.restaurants}))
      .catch(err => console.log(err));
    }
    findSelectedRestaurant(id){
      const restaurant = this.state.restaurantList[id];
      this.setState({selectedRestaurant: restaurant})
    }

    patchUser(updatedUser){
      const userUrl = this.state.user._links.self.href
      const uIdLength = userUrl.length
      const uId = userUrl.charAt(uIdLength - 2) + userUrl.charAt(uIdLength - 1)
      const request = new Request
      request.patch('/users/'+ uId, updatedUser)
      .catch(err => console.error)
    }

    addToRecipeFav(recipe){
      let newUser = this.state.user
      {if (newUser.recipeId) {
        newUser.recipeId.push(recipe.idMeal)
      } else {
        newUser.recipeId = [recipe.idMeal]
      }}
      this.patchUser(newUser);
    }

    addToRestaurantFav(restaurant){
      let newUser = this.state.user;
      {if (newUser.restaurantId) {
        newUser.restaurantId.push(restaurant.restaurant.id)
      } else {
        newUser.restaurantId = [restaurant.restaurant.id]
      }}
      this.patchUser(newUser);
    }

    updateProfileUser(updatedUser){
      this.patchUser(updatedUser);
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
            render={() => <SignUpContainer signUpMain={this.createNewUser} user={this.state.user}/>}
            />
            <Route exact path="/in-out"
            render={() => <InOutContainer user={this.state.user} getRecipeList={this.getRecipeList} getRestaurantList={this.getRestaurantList}/>}
            />

            <Route  exact path="/in"
            render={() => <InContainer user={this.state.user} recipiesList={this.state.recipiesList} findSelectedRecipe={this.findSelectedRecipe} selectedRecipe={this.state.selectedRecipe} findRandomRecipe={this.findRandomRecipe}/>}
            />
            <Route exact path="/in/recipe"
            render={() => <InRecipeContainer user={this.state.user} addToRecipeFavMain={this.addToRecipeFav} selectedRecipe={this.state.selectedRecipe}/>}
            />
            <Route exact path="/out"
            render={() => <OutContainer user={this.state.user} restaurantList={this.state.restaurantList} findSelectedRestaurant={this.findSelectedRestaurant} selectedRestaurant={this.state.selectedRestaurant}/>}
            />
            <Route exact path="/out/restaurant"
            render={() => <OutRestaurantContainer user={this.state.user}  selectedRestaurant={this.state.selectedRestaurant} addToRestaurantFavMain={this.addToRestaurantFav}/>}
            />
            <Route exact path="/profile"
            render={() => <Profile user={this.state.user} updateUserMain={this.updateProfileUser}/>}
            />
          </Switch>
         </Router>
        </div>
      )
    }

}

export default MainContainer

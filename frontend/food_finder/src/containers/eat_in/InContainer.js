import React, { Component } from 'react';
import Urls from '../../helpers/keys/Urls'
import RecipeList from '../../components/RecipeList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InRecipeContainer from './InRecipeContainer'
import NavBar from '../../NavBar'
import './InContainer.css'

class InContainer extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   recipiesList: [],
  //   //   selectedRecipe: []
  //   };
  //   this.findSelectedRecipe = this.findSelectedRecipe.bind(this);
  // }

  // componentDidMount() {
  //   const url = new Urls
  //   fetch(url.urlTest())
  //   .then(res => res.json())
  //   .then(recipies => this.setState({recipiesList: recipies.meals}))
  //   .catch(err => console.log(err));
  // }

  // findSelectedRecipe(id) {
  //   const url = new Urls
  //   fetch(url.getRecipeById(id))
  //   .then(res => res.json())
  //   .then(recipies => this.setState({selectedRecipe: recipies.meals}))
  //   // .then(window.location = '/in/recipe')
  //   .catch(err => console.log(err));
  //
  // }

  render() {
    return (

      <div className="content">
      <NavBar />
      <h3>Your {this.props.user._embedded.ingredient.name} Recipes</h3>
      <RecipeList recipiesList={this.props.recipiesList} findSelectedRecipe={this.props.findSelectedRecipe} selectedRecipe={this.props.selectedRecipe} findRandomRecipe={this.props.findRandomRecipe}/>
      </div>
    );
  }

}

export default InContainer;

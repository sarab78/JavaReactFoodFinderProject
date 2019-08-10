import React, { Component } from 'react';
import Urls from '../../helpers/keys/Urls'
import RecipeList from '../../components/RecipeList'

class InContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipiesList: [],
      selectedRecipe: []
    };
    this.findSelectedRecipe = this.findSelectedRecipe.bind(this);
  }

  componentDidMount() {
    const url = new Urls
    fetch(url.urlTest())
    .then(res => res.json())
    .then(recipies => this.setState({recipiesList: recipies.meals}))
    .catch(err => console.log(err));
  }

  findSelectedRecipe(id) {
    const url = new Urls
    fetch(url.getRecipeById(id))
    .then(res => res.json())
    .then(recipies => this.setState({selectedRecipe: recipies.meals}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <p>TestIn</p>
        <RecipeList recipiesList={this.state.recipiesList} findSelectedRecipe={this.findSelectedRecipe}/>
      </div>
    );
  }

}

export default InContainer;

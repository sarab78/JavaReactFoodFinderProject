import React from 'react';
import RecipeListItem from './RecipeListItem'
import './RecipeList.css'

const RecipeList = (props) => {

  if(!props.recipiesList){
  return "Loading..."
}


function showButton(checkRecipeSelected) {
   if(!checkRecipeSelected) return null;
   return (
      <div>
        <h1>Click me!</h1>
      </div>
   )
}

const recipies = props.recipiesList.map((recipe, index) => {

  return <li key={index}>
          <RecipeListItem recipe={recipe} findSelectedRecipe={props.findSelectedRecipe} showButton={showButton}/>
        </li>
})



  return(
  <div className="recipe-list">
    <h3>YOUR RECIPES</h3>
      {recipies}
      {showButton(props.selectedRecipe)}
  </div>
)
};

export default RecipeList;

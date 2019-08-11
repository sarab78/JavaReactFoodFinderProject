import React from 'react';
import RecipeListItem from './RecipeListItem'

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
  <div>
    <p>TEstRecipeList</p>
      {recipies}
      {showButton(props.selectedRecipe)}
  </div>
)
};

export default RecipeList;

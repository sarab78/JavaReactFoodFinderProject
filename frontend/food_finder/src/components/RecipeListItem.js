import React from 'react';
import './RecipeListItem.css'


const RecipeListItem = (props) => {


  const handleClick = (event) => {
    event.preventDefault();
    props.findSelectedRecipe(props.recipe.idMeal);
    props.showButton(props.selectedRecipe)
  }

  return(
    <div className="recipe-list-item">
      <img onClick={handleClick} src={props.recipe.strMealThumb} width="300" height="100"></img>
      <p onClick={handleClick}>{props.recipe.strMeal}</p>
    </div>
)
}


export default RecipeListItem;

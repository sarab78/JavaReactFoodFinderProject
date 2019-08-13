import React from 'react';


const RecipeListItem = (props) => {


  const handleClick = (event) => {
    event.preventDefault();
    props.findSelectedRecipe(props.recipe.idMeal);
    props.showButton(props.selectedRecipe)
  }

  return(
    <div>
      <img onClick={handleClick} src={props.recipe.strMealThumb} width="100" height="100"></img>
      <p onClick={handleClick}>{props.recipe.strMeal}</p>
    </div>
)
}


export default RecipeListItem;

import React from 'react';

const RecipeListItem = (props) => {

  const handleClick = (event) => {
    console.log('click')
    event.preventDefault();
    props.findSelectedRecipe(props.recipe.idMeal);
  }

  return(
    <div>
      <p onClick={handleClick}>{props.recipe.strMeal}</p>
    </div>
)
}


export default RecipeListItem;

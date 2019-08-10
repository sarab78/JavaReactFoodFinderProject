import React from 'react';

const RecipeListItem = (props) => {

  const handleClick = (event) => {
    event.preventDefault();
    props.findSelectedRecipe(props.recipe.idMeal);
    console.log(event);
  }

  return(
    <div>
      <p onClick={handleClick}>{props.recipe.strMeal}</p>
    </div>
)
};

export default RecipeListItem;

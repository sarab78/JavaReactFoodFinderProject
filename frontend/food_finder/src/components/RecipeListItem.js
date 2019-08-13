import React from 'react';
import {Link} from 'react-router-dom';

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
      <Link to='/in/recipe'>
      <button type="button">Take me to this recipe!</button>
      </Link>
    </div>
)
}


export default RecipeListItem;

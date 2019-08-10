import React from 'react';
import {Link} from 'react-router-dom';

const RecipeListItem = (props) => {

  const handleClick = (event) => {
    console.log('click')
    event.preventDefault();
    props.findSelectedRecipe(props.recipe.idMeal);
  }

  return(
    <div>
      <p onClick={handleClick}>{props.recipe.strMeal}</p>
      <Link to='/in/recipe'>
      <button type="button">Take me to this recipe!</button>
      </Link>
    </div>
)
}


export default RecipeListItem;

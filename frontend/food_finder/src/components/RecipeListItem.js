import React from 'react';
import {Link} from 'react-router-dom';

const RecipeListItem = (props) => {


  const handleClick = (event) => {
    console.log('click')
    event.preventDefault();
    props.findSelectedRecipe(props.recipe.idMeal);
    props.showButton(props.selectedRecipe)
  }

  return(
    <div>
      <img onClick={handleClick} src={props.recipe.strMealThumb}></img>
      <p onClick={handleClick}>{props.recipe.strMeal}</p>
      <Link to='/in/recipe'>
      <button type="button">Take me to this recipe!</button>
      </Link>
    </div>
)
}


export default RecipeListItem;

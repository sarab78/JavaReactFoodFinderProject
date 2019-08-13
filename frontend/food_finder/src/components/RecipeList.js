import React from 'react';
import RecipeListItem from './RecipeListItem'
import './RecipeList.css'
import {Link} from 'react-router-dom';

const RecipeList = (props) => {

  if(!props.recipiesList){
  return "Loading..."
}


function showButton() {
   if(!props.selectedRecipe) return null;
   return (
     <Link to='/in/recipe'>
     <button type="button">Take me to this recipe!</button>
     </Link>
   )
}

const recipies = props.recipiesList.map((recipe, index) => {

  return <li key={index}>
          <RecipeListItem recipe={recipe} findSelectedRecipe={props.findSelectedRecipe} showButton={showButton}/>
        </li>
})



  return(
  <div className="recipe-list">
      {recipies}
      {showButton()}
  </div>
)
};

export default RecipeList;

import React from 'react';
import RecipeListItem from './RecipeListItem'

const RecipeList = (props) => {

  if(!props.recipiesList){
  return "Loading..."
}


const recipies = props.recipiesList.map((recipe, index) => {

  return <li key={index}>
          <RecipeListItem recipe={recipe} findSelectedRecipe={props.findSelectedRecipe}/>
        </li>
})




  return(
  <div>
    <p>TEstRecipeList</p>
      {recipies}
  </div>
)
};

export default RecipeList;

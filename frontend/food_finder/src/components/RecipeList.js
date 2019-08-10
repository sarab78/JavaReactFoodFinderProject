import React from 'react';
import RecipeListItem from './RecipeListItem'

const RecipeList = (props) => {

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

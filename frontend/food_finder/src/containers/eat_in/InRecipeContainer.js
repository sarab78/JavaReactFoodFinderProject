import React from 'react'
import RecipeIngredients from '../../components/RecipeIngredients'
import RecipeVideo from '../../components/RecipeVideo'

const InRecipeContainer = (props) => {

  if(!props.selectedRecipe){
    return "Loading..."
  }

  return(
    <div className="recipe-detials">

    <div className="recipe-name">
    <h1>{props.selectedRecipe.strMeal}</h1>
    </div>

    <div className="recipe-image">
    <img src={props.selectedRecipe.strMealThumb}></img>
    </div>

    <RecipeIngredients selectedRecipe={props.selectedRecipe} />

    <div className="recipe-instructions">
    <h4>Instructions</h4>
    <p>{props.selectedRecipe.strInstructions}</p>
    </div>

    <div className="recipe-video">
    <h4>Instructional video</h4>
    <RecipeVideo selectedRecipe={props.selectedRecipe} />
    </div>

    </div>
  )

}

export default InRecipeContainer;

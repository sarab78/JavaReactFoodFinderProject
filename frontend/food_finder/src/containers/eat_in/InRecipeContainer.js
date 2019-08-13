import React from 'react'
import RecipeIngredients from '../../components/RecipeIngredients'
import RecipeVideo from '../../components/RecipeVideo'
import NavBar from '../../NavBar'
import './InRecipeContainer.css'

const InRecipeContainer = (props) => {

  if(!props.selectedRecipe){
    return "Loading..."
  }

  const addToRecipeFav = () => {
    props.addToRecipeFavMain(props.selectedRecipe)
  }

  return(
    <div className="recipe-details">

    <NavBar />

    <div className="recipe-name">
    <h2>{props.selectedRecipe.strMeal}</h2>
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

    <div className="recipe-favourites-button">
    <button onClick={addToRecipeFav}>Add To My Favourites</button>
    </div>

    </div>
  )

}

export default InRecipeContainer;

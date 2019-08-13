import React from 'react'
import RecipeIngredients from '../../components/RecipeIngredients'
import RecipeVideo from '../../components/RecipeVideo'
import NavBar from '../../NavBar'

const InRecipeContainer = (props) => {

  if(!props.selectedRecipe){
    return "Loading..."
  }

  const addToRecipeFav = () => {
    props.addToRecipeFavMain(props.selectedRecipe)
  }

  return(
    <div className="recipe-detials">

    <NavBar />

    <div className="recipe-name">
    <h1>{props.selectedRecipe.strMeal}</h1>
    </div>
    <button onClick={addToRecipeFav}>Add To My Favourites</button>
    <br/>
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

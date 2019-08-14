import React from 'react'
import './RecipeIngredients.css'

const RecipeIngredients = (props) => {

  return(
    <div className="recipe-ingredients">
    <h3>Ingredients</h3>
    <ul>
    <li>{props.selectedRecipe.strIngredient1} - {props.selectedRecipe.strMeasure1} </li>
    <li>{props.selectedRecipe.strIngredient2} - {props.selectedRecipe.strMeasure2} </li>
    <li>{props.selectedRecipe.strIngredient3} - {props.selectedRecipe.strMeasure3} </li>
    <li>{props.selectedRecipe.strIngredient4} - {props.selectedRecipe.strMeasure4} </li>
    <li>{props.selectedRecipe.strIngredient5} - {props.selectedRecipe.strMeasure5} </li>
    <li>{props.selectedRecipe.strIngredient6} - {props.selectedRecipe.strMeasure6} </li>
    <li>{props.selectedRecipe.strIngredient7} - {props.selectedRecipe.strMeasure7} </li>
    <li>{props.selectedRecipe.strIngredient8} - {props.selectedRecipe.strMeasure8} </li>
    <li>{props.selectedRecipe.strIngredient9} - {props.selectedRecipe.strMeasure9} </li>
    <li>{props.selectedRecipe.strIngredient10} - {props.selectedRecipe.strMeasure10} </li>
    </ul>
    <ul>
    <li>{props.selectedRecipe.strIngredient11} - {props.selectedRecipe.strMeasure11} </li>
    <li>{props.selectedRecipe.strIngredient12} - {props.selectedRecipe.strMeasure12} </li>
    <li>{props.selectedRecipe.strIngredient13} - {props.selectedRecipe.strMeasure13} </li>
    <li>{props.selectedRecipe.strIngredient14} - {props.selectedRecipe.strMeasure14} </li>
    <li>{props.selectedRecipe.strIngredient15} - {props.selectedRecipe.strMeasure15} </li>
    <li>{props.selectedRecipe.strIngredient16} - {props.selectedRecipe.strMeasure16} </li>
    <li>{props.selectedRecipe.strIngredient17} - {props.selectedRecipe.strMeasure17} </li>
    <li>{props.selectedRecipe.strIngredient18} - {props.selectedRecipe.strMeasure18} </li>
    <li>{props.selectedRecipe.strIngredient19} - {props.selectedRecipe.strMeasure19} </li>
    <li>{props.selectedRecipe.strIngredient20} - {props.selectedRecipe.strMeasure20} </li>
    </ul>
    </div>
  
  )

}

export default RecipeIngredients

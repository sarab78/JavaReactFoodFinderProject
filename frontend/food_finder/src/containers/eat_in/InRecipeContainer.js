import React from 'react'

const InRecipeContainer = (props) => {

  if(!props.selectedRecipe){
    return "Loading..."
  }

  return(
    <h1>{props.selectedRecipe.strMeal}</h1>
  )

}

export default InRecipeContainer;

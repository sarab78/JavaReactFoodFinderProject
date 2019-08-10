import React from 'react'

const InRecipeContainer = (props) => {

  if(!props.selectedRecipe){
    return "Loading..."
  }

  return(
    <h1>{props.selectedRecipe[0].strMeal}</h1>
  )

}

export default InRecipeContainer;

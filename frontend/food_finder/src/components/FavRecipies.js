import React from 'react';



const FavRecipies = (props) => {

  const userRecipes =
    props.recipesFav.map((recipe, index) => {
    {if (recipe.meals){
      return  <div>
              <li >
                <p>{recipe.meals[0].strMeal} </p>
                <img src={recipe.meals[0].strMealThumb} width="100" height="100"></img>
              </li>
           </div>
        }}
  })



  return (
    <div>
      <h4>Your Saved Recipies</h4>
        {userRecipes}
    </div>
  )
};

export default FavRecipies;

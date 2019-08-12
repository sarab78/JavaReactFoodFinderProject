package com.codeclan.example.foodfinderservice.projections;

import com.codeclan.example.foodfinderservice.models.CuisineType;
import com.codeclan.example.foodfinderservice.models.Ingredient;
import com.codeclan.example.foodfinderservice.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedIngredientsCuisines", types = User.class)
public interface EmbedIngredientsCuisines {
    Long getId();
    String getFirstName();
    String getLastName();
    String getLocation();
    List<String> getRestaurantId();
    List<String> getRecipeId();
    Ingredient getIngredient();
    CuisineType getCuisine();

}

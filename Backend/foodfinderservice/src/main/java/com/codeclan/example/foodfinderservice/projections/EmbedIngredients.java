package com.codeclan.example.foodfinderservice.projections;


import com.codeclan.example.foodfinderservice.models.Ingredient;
import com.codeclan.example.foodfinderservice.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedIngredients", types = Ingredient.class)
public interface EmbedIngredients {
    Long getId();
    String getName();
//    List<User> getUsers();
}

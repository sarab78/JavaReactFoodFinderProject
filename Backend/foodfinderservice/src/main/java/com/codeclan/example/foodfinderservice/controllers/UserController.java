package com.codeclan.example.foodfinderservice.controllers;

import com.codeclan.example.foodfinderservice.models.CuisineType;
import com.codeclan.example.foodfinderservice.models.Ingredient;
import com.codeclan.example.foodfinderservice.models.User;
import com.codeclan.example.foodfinderservice.repositories.CuisineTypeRepository.CuisineTypeRepository;
import com.codeclan.example.foodfinderservice.repositories.IngredientRepository.IngredientRepository;
import com.codeclan.example.foodfinderservice.repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    CuisineTypeRepository cuisineTypeRepository;

    @Autowired
    IngredientRepository ingredientRepository;

    @PutMapping(value = "/{id}/ingredient/{ingredientId}")
    public void updateaddUser(@PathVariable long id, @PathVariable long ingredientId){
        User user = userRepository.getOne(id);
        Ingredient ingredient = (Ingredient) ingredientRepository.getOne((ingredientId));
        ingredient.addUser(user);
        userRepository.save(user);
    }

//    @PutMapping(value = "/{id}/cuisineType/{cuisineTypeId")
//    public void updateaddUser(@PathVariable long id, @PathVariable long cuisineTypeId){
//        User user = userRepository.getOne(id);
//        CuisineType cuisineType = (CuisineType) cuisineTypeRepository.getOne(cuisineTypeId);
//        cuisineType.addUser(user);
//        userRepository.save(user);
//    }
}

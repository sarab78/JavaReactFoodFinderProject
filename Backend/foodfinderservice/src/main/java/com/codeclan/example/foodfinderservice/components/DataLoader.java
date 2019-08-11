package com.codeclan.example.foodfinderservice.components;

import com.codeclan.example.foodfinderservice.models.CuisineType;
import com.codeclan.example.foodfinderservice.models.Ingredient;
import com.codeclan.example.foodfinderservice.models.User;
import com.codeclan.example.foodfinderservice.repositories.CuisineTypeRepository.CuisineTypeRepository;
import com.codeclan.example.foodfinderservice.repositories.IngredientRepository.IngredientRepository;
import com.codeclan.example.foodfinderservice.repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CuisineTypeRepository cuisineTypeRepository;
    @Autowired
    IngredientRepository ingredientRepository;
    @Autowired
    UserRepository userRepoistory;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        User user1 = new User("James", "Bloggs", "Glasgow", "","");
        userRepoistory.save(user1);

        User user2 = new User("Danny", "Smith", "Glasgow", "","");
        userRepoistory.save(user2);


        Ingredient ingredient1 = new Ingredient("Cucumber");
        ingredientRepository.save(ingredient1);

        Ingredient ingredient2 = new Ingredient("Chicken");
        ingredientRepository.save(ingredient2);

        CuisineType cuisineType1 = new CuisineType("Chinese");
        cuisineTypeRepository.save(cuisineType1);

        CuisineType cuisineType2 = new CuisineType("Italian");
        cuisineTypeRepository.save(cuisineType2);

        user1.addIngredient(ingredient1);
        user1.addIngredient(ingredient2);
        user1.addCuisineType(cuisineType1);
        user1.addCuisineType(cuisineType2);
        userRepoistory.save(user1);

        ingredient2.addUser(user2);
        ingredientRepository.save(ingredient2);

//        user1.addCuisineType(cuisineType1);
//        user1.addCuisineType(cuisineType2);
//        userRepoistory.save(user1);

        cuisineType2.addUser(user2);
        cuisineTypeRepository.save(cuisineType2);



    }



}

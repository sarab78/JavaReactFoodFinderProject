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



        Ingredient ingredient1 = new Ingredient("Bacon");
        ingredientRepository.save(ingredient1);

        Ingredient ingredient2 = new Ingredient("Chicken");
        ingredientRepository.save(ingredient2);

        Ingredient ingredient3 = new Ingredient("Beef");
        ingredientRepository.save(ingredient3);

        Ingredient ingredient4 = new Ingredient("Sausages");
        ingredientRepository.save(ingredient4);

        Ingredient ingredient5 = new Ingredient("Pork");
        ingredientRepository.save(ingredient5);

        Ingredient ingredient6 = new Ingredient("Eggs");
        ingredientRepository.save(ingredient6);

        Ingredient ingredient7 = new Ingredient("Garlic");
        ingredientRepository.save(ingredient7);

        Ingredient ingredient8 = new Ingredient("Tomato");
        ingredientRepository.save(ingredient8);

        Ingredient ingredient9 = new Ingredient("Onion");
        ingredientRepository.save(ingredient9);
        
        Ingredient ingredient10 = new Ingredient("Butter");
        ingredientRepository.save(ingredient10);

        CuisineType cuisineType1 = new CuisineType("Chinese", 25);
        cuisineTypeRepository.save(cuisineType1);

        CuisineType cuisineType2 = new CuisineType("Italian", 55);
        cuisineTypeRepository.save(cuisineType2);

        CuisineType cuisineType3 = new CuisineType("Indian", 148);
        cuisineTypeRepository.save(cuisineType3);

        CuisineType cuisineType4 = new CuisineType("International", 154);
        cuisineTypeRepository.save(cuisineType4);

        CuisineType cuisineType5 = new CuisineType("Scottish", 210);
        cuisineTypeRepository.save(cuisineType5);

        CuisineType cuisineType6 = new CuisineType("Irish", 135);
        cuisineTypeRepository.save(cuisineType6);

        CuisineType cuisineType7 = new CuisineType("Healthy Food", 143);
        cuisineTypeRepository.save(cuisineType7);

        CuisineType cuisineType8 = new CuisineType("Grill", 181);
        cuisineTypeRepository.save(cuisineType8);

        CuisineType cuisineType9 = new CuisineType("Mexican", 73);
        cuisineTypeRepository.save(cuisineType9);

        CuisineType cuisineType10 = new CuisineType("Thai", 95);
        cuisineTypeRepository.save(cuisineType10);


        User user1 = new User("James", "Bloggs", "Glasgow", cuisineType3,ingredient3);
        userRepoistory.save(user1);

        User user2 = new User("Danny", "Smith", "Glasgow", cuisineType2,ingredient1);
        userRepoistory.save(user2);

        User user3 = new User("Bobby", "Greenwood", "Renfrew", cuisineType1, ingredient4);
        userRepoistory.save(user3);

        user1.setIngredient(ingredient1);
        user1.setCuisine(cuisineType1);
        userRepoistory.save(user1);

        ingredient2.addUser(user2);
        ingredientRepository.save(ingredient2);

//        user1.addCuisineType(cuisineType1);
//        user1.addCuisineType(cuisineType2);
//        userRepoistory.save(user1);

        cuisineType2.addUser(user2);
        cuisineTypeRepository.save(cuisineType2);

        user1.addRecipe("12");
        userRepoistory.save(user1);

        user2.addRecipe("10");
        userRepoistory.save(user2);

        user1.addRestaurant("TH");
        user1.addRestaurant("BK");
        userRepoistory.save(user1);

        user2.addRestaurant("BK");
        userRepoistory.save(user2);

    }



}

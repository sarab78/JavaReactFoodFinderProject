package com.codeclan.example.foodfinderservice;

import com.codeclan.example.foodfinderservice.models.Ingredient;
import com.codeclan.example.foodfinderservice.models.User;
import com.codeclan.example.foodfinderservice.repositories.CuisineTypeRepository.CuisineTypeRepository;
import com.codeclan.example.foodfinderservice.repositories.IngredientRepository.IngredientRepository;
import com.codeclan.example.foodfinderservice.repositories.UserRepository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FoodfinderserviceApplicationTests {

	@Autowired
	UserRepository userRepository;

	@Autowired
	CuisineTypeRepository cuisineTypeRepository;

	@Autowired
	IngredientRepository ingredientRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createUserAndIngredientThenSave(){
		User user1 = new User("James", "Bloggs", "Glasgow", "","");
		userRepository.save(user1);

		Ingredient ingredient1 = new Ingredient("Cucumber");
		ingredientRepository.save(ingredient1);

		user1.addIngredient(ingredient1);
		ingredient1.addUser(user1);
	}


}

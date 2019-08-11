package com.codeclan.example.foodfinderservice.repositories.IngredientRepository;

import com.codeclan.example.foodfinderservice.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}

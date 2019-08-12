package com.codeclan.example.foodfinderservice.repositories.IngredientRepository;

import com.codeclan.example.foodfinderservice.models.Ingredient;
import com.codeclan.example.foodfinderservice.projections.EmbedIngredients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedIngredients.class)
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}

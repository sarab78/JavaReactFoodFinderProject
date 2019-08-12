package com.codeclan.example.foodfinderservice.repositories.UserRepository;

import com.codeclan.example.foodfinderservice.models.User;
import com.codeclan.example.foodfinderservice.projections.EmbedIngredientsCuisines;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedIngredientsCuisines.class)
public interface UserRepository extends JpaRepository<User, Long> {

}

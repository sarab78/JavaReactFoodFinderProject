package com.codeclan.example.foodfinderservice.repositories.CuisineTypeRepository;

import com.codeclan.example.foodfinderservice.models.CuisineType;
import com.codeclan.example.foodfinderservice.projections.EmbedCuisineTypes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedCuisineTypes.class)
public interface CuisineTypeRepository extends JpaRepository<CuisineType, Long> {
}

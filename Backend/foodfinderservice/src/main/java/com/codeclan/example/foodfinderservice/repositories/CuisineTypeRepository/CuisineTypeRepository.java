package com.codeclan.example.foodfinderservice.repositories.CuisineTypeRepository;

import com.codeclan.example.foodfinderservice.models.CuisineType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CuisineTypeRepository extends JpaRepository<CuisineType, Long> {
}

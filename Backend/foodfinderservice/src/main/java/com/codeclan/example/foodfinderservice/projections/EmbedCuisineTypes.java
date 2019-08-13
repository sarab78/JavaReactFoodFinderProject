package com.codeclan.example.foodfinderservice.projections;

import com.codeclan.example.foodfinderservice.models.CuisineType;
import com.codeclan.example.foodfinderservice.models.User;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedCuisineTypes", types = CuisineType.class)
public interface EmbedCuisineTypes {
    Long getId();
    String getName();
    int getCuisine_id();

}

package com.codeclan.example.foodfinderservice.controllers;

import com.codeclan.example.foodfinderservice.repositories.CuisineTypeRepository.CuisineTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/cuisines")
public class CuisineTypeController {

    @Autowired
    CuisineTypeRepository cuisineTypeRepository;
}

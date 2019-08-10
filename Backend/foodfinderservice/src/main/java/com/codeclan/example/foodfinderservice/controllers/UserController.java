package com.codeclan.example.foodfinderservice.controllers;

import com.codeclan.example.foodfinderservice.repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserController {

    @Autowired
    UserRepository userRepository;
}

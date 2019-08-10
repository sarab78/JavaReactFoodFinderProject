package com.codeclan.example.foodfinderservice.repositories.UserRepository;

import com.codeclan.example.foodfinderservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}

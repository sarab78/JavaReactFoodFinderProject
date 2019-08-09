package com.codeclan.example.foodfinderservice.models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class CuisineType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "cuisineType_id")
    private  String cuisineTypeId;

    public CuisineType(String name, String cuisineTypeId) {
        this.name = name;
        this.cuisineTypeId = cuisineTypeId;
    }

    public CuisineType() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCuisineTypeId() {
        return cuisineTypeId;
    }

    public void setCuisineTypeId(String cuisineTypeId) {
        this.cuisineTypeId = cuisineTypeId;
    }
}

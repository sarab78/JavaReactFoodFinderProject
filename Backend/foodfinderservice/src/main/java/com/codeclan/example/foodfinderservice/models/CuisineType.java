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



    @ManyToOne
    @JoinColumn(name = "cuisineType_id", nullable = false)
    private  CuisineType cuisineType;




    public CuisineType(String name,  CuisineType cuisineType ) {
        this.name = name;
        this.cuisineType = cuisineType;
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

    public CuisineType getCuisineType() {
        return cuisineType;
    }

    public void setCuisineType(CuisineType cuisineType) {
        this.cuisineType = cuisineType;
    }

    public void addUser(User user) {
    }
}

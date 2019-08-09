package com.codeclan.example.foodfinderservice.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "location")
    private String location;

    @Column(name = "restaurant_id")
    private String restaurantId;

    @Column(name = "recipe_id")
    private String recipeId;

   @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<CuisineType> cuisines;

   @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
   private List<Ingredient> ingredients;


    public User(String firstName, String lastName, String location, String restaurantId, String recipeId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.restaurantId = restaurantId;
        this.recipeId = recipeId;
        this.cuisines = new ArrayList<CuisineType>();
        this.ingredients = new ArrayList<Ingredient>();

    }

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<CuisineType> getCuisines() {
        return cuisines;
    }

    public void setCuisines(List<CuisineType> cuisines) {
        this.cuisines = cuisines;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public String getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(String restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(String recipeId) {
        this.recipeId = recipeId;
    }
}

package com.codeclan.example.foodfinderservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

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
    private ArrayList<String> restaurantId;

    @Column(name = "recipe_id")
    private ArrayList<String> recipeId;

//   @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    private List<CuisineType> cuisines;

    @JsonIgnoreProperties("users")
    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinColumn(name="cuisine_id", nullable=false)
    private CuisineType cuisine;
//            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name = "cuisine_type_id", nullable = false, updatable = false)}


//   @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//   private List<Ingredient> ingredients;

    @JsonIgnoreProperties("users")
    @ManyToOne
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinColumn(name="ingredient_id", nullable=false)
    private Ingredient ingredient;
//            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name = "ingredient_id", nullable = false, updatable = false)}




    public User(String firstName, String lastName, String location, CuisineType cuisines, Ingredient ingredient) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.restaurantId = new ArrayList<String>();
        this.recipeId = new ArrayList<String>();
        this.cuisine = cuisines;
        this.ingredient = ingredient;

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

    public List<String> getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(ArrayList<String> restaurantId) {
        this.restaurantId = restaurantId;
    }

    public ArrayList<String> getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(ArrayList<String> recipeId) {
        this.recipeId = recipeId;
    }

    public CuisineType getCuisine() {
        return cuisine;
    }

    public void setCuisine(CuisineType cuisine) {
        this.cuisine = cuisine;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public void addRecipe(String recipeId){
        this.recipeId.add(recipeId);
    }

    public void addRestaurant(String restaurantId){
        this.restaurantId.add(restaurantId);
    }
}

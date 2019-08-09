package com.codeclan.example.foodfinderservice.models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "name")
    private String name;

    @Column(name = "ingredient_id")
    private String ingredientId;

    public Ingredient(String name, String ingredientId) {
        this.name = name;
        this.ingredientId = ingredientId;
    }

    public Ingredient() {
    }

efsdf

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(String ingredientId) {
        this.ingredientId = ingredientId;
    }
}

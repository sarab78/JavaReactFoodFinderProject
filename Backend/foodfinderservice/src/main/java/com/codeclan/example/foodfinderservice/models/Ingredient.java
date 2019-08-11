package com.codeclan.example.foodfinderservice.models;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "ingredient_id", nullable = false)
    private Ingredient ingredient;

    public Ingredient(String name,  Ingredient ingredient) {
        this.name = name;
        this.ingredient = ingredient;
    }

    public Ingredient() {
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public void addUser(User user) {
    }
}

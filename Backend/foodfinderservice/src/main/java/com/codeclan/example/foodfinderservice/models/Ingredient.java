package com.codeclan.example.foodfinderservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @JsonIgnoreProperties("ingredients")
    @OneToMany(mappedBy = "ingredient", fetch = FetchType.LAZY)
    private List<User> users;
//    @JoinTable(
//            name = "users_ingredients",
//            joinColumns = {@JoinColumn(name = "ingredient_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)}
//    )


    public Ingredient(String name) {
        this.name = name;
        this.users = new ArrayList<User>();
//        this.user = user;
    }

    public Ingredient() {
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }


    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUser(User user){
        this.users.add(user);
    }
//
//    public void addUser(User user) {
//    }


}

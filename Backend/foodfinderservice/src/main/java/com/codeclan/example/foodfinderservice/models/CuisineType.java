package com.codeclan.example.foodfinderservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cuisine_types")
public class CuisineType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "cuisine_id")
    private int cuisine_id;

//    @ManyToOne
//    @JoinColumn(name = "cuisineType_id", nullable = true)
//    private User user;

    @JsonIgnoreProperties("cuisine_types")
    @OneToMany(mappedBy = "cuisine", fetch = FetchType.LAZY)
    private List<User> users;
//    @JoinTable(
//            name = "users_cuisines",
//            joinColumns = {@JoinColumn(name = "cuisine_type_id", nullable = false, updatable = false)},
//            inverseJoinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)}
//    )



    public CuisineType(String name,  int cuisine_id) {
        this.name = name;
        this.cuisine_id = cuisine_id;
        this.users = new ArrayList<User>();

//        this.user= user;
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

    public void addUser(User user) {
        this.users.add(user);
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public int getCuisine_id() {
        return cuisine_id;
    }

    public void setCuisine_id(int cuisine_id) {
        this.cuisine_id = cuisine_id;
    }
}

import React, { Component } from 'react';
import RestaurantList from '../../components/RestaurantList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../../NavBar'
import './OutContainer.css'

class OutContainer extends Component {


  render() {
    return (
      <div className="out-content">
      <NavBar />
        <h3> Your Local {this.props.user._embedded.cuisine.name} Restaurants</h3>
        <RestaurantList restaurantList={this.props.restaurantList} selectedRestaurant={this.props.findSelectedRestaurant} selectedRestaurantInfo={this.props.selectedRestaurant}/>
      </div>
    );
  }

}

export default OutContainer;

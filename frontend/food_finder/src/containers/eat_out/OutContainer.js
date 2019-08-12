import React, { Component } from 'react';
import RestaurantList from '../../components/RestaurantList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../../NavBar'

class OutContainer extends Component {


  render() {
    return (
      <div>
      <NavBar />
        <RestaurantList restaurantList={this.props.restaurantList} selectedRestaurant={this.props.findSelectedRestaurant}/>
      </div>
    );
  }

}

export default OutContainer;

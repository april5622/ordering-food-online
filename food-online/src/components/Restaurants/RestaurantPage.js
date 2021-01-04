import React, { useEffect } from "react";
import { getRestaurants } from "../../store/action/index";
import RestaurantCard from "./RestaurantCard";
import { connect } from "react-redux";
import "../../css/Restaurants.css";

const RestaurantPage = (props, getRestaurants, isFetching, error) => {

  useEffect(()=> {
    props.getRestaurants();
 }, []);

 if (isFetching) {
     return <h2>Fetching Restaurants</h2>
 } 

 if (error) {
     return <h2>{error}</h2>
 }


  return (
    <div>
      <h3>Restaurant Page</h3>
        {props.restaurants.map(restaurant => {
          return <RestaurantCard 
            key={restaurant.id} restaurant={restaurant}/>
        })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getRestaurants })(RestaurantPage);

//export default RestaurantPage;

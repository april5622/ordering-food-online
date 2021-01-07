import React, { useEffect, useHistory } from "react";
import { getRestaurants } from "../../store/action/index";
import RestaurantCard from "./RestaurantCard";
import { connect } from "react-redux";
import "../../css/Restaurants.css";

const RestaurantPage = (props, getRestaurants, isFetching, error) => {
  let history = useHistory();

  useEffect(()=> {
    props.getRestaurants();
 }, [getRestaurants]);

 if (isFetching) {
     return <h2>Fetching Restaurants</h2>
 } 

 if (error) {
     return <h2>{error}</h2>
 }


 const HandleClick = e => {
   e.preventDefault();
   history.push('/menu')


 }


  return (
    <div className="restaurant-page">
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

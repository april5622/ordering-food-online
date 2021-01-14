import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { getRestaurants } from "../../store/action/index";
import RestaurantCard from "./RestaurantCard";
import { connect } from "react-redux";
import "../../css/Restaurants.css";


const RestaurantPage = (props, getRestaurants, isFetching, error) => {

  useEffect(()=> {
    props.getRestaurants();
 }, [getRestaurants]);

 if (isFetching) {
     return <h2>Fetching Restaurants</h2>
 } 

 if (error) {
     return <h2>{error}</h2>
 }

// /restaurant/:id/menu
//  const handleClick = e => {
//    e.preventDefault();
//    history.push(`restaurant/${id}`)

//  }


  return (
    <div>
      {/* <div className="restaurant-page" onClick={handleClick}> */}
      <div className="restaurant-page">
          {/* {props.restaurants.map(restaurant => {
            return <RestaurantCard 
              key={restaurant.id} restaurant={restaurant}/>
          })} */}
          {props.restaurants.map(restaurant => (
            <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
                <RestaurantCard restaurant={restaurant}/>
            </Link>
          ))}
      </div>
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

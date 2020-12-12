import React, { useEffect } from "react";
import "../css/Homepage.css";
import { connect } from "react-redux";
import { getRestaurants } from "../store/action/index";
//import RestaurantPage from "./RestaurantPage";


const Homepage = (props, getRestaurants, isFetching, error) => {

  useEffect(() => {
    props.getRestaurants();
  }, [getRestaurants]);

  if (isFetching) {
    return <h2>Fetching Restaurants</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="homepage">
      <h2>Homepage</h2>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps,{getRestaurants})(Homepage);

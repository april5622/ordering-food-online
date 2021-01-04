import React from "react";
import "../css/Homepage.css";
import RestaurantPage from "./Restaurants/RestaurantPage";

const Homepage = () => {

  return (
    <div className="homepage">
      <h2>Homepage</h2>

      <RestaurantPage />

    </div>
  );
};

export default Homepage;

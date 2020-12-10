import React, { useEffect } from "react";
import "../css/Homepage.css";

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

export default Homepage;

import React from 'react';
import "../../css/Restaurants.css";

const RestaurantCard = (props) => {
    return (
        <div className="restaurant-cards">
            <img src={props.restaurant.photo} />
            <h3 className="restaurant-name">{props.restaurant.name}</h3>
            <p className="restaurant-desc">{props.restaurant.description}</p>   
        </div>
    )
}

export default RestaurantCard

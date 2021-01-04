import React from 'react';

const RestaurantCard = (props) => {
    return (
        <div>
            <h3>{props.restaurant.name}</h3>
            <p>{props.restaurant.description}</p>
            
        </div>
    )
}

export default RestaurantCard

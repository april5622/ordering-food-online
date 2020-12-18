import React from 'react'

const RestaurantCard = (props) => {
    return (
        <div>
            <h3>{props.restaurants.name}</h3>
            <p>{props.restaurants.description}</p>
            
        </div>
    )
}

export default RestaurantCard

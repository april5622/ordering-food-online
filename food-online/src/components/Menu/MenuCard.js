import React from 'react';
import "../../css/Menu.css";

const MenuCard = (props) => {
    return (
        <div className="menu-cards">
            <p>{props.item.dish}</p>
            <p>{props.item.price}</p>
            <p>{props.item.description}</p>

            <div className="btn">
                <button>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default MenuCard

import React from 'react'

const MenuCard = (props) => {
    return (
        <div>
            <h4>MENU CARD</h4>
            <p>{props.item.dish}</p>
            <p>{props.item.price}</p>
            <p>{props.item.desciption}</p>
        </div>
    )
}

export default MenuCard

import React from 'react';
import  { AddCart } from "../../state/action/index";
import "../../css/Menu.css";
import { connect } from 'react-redux';

const MenuCard = (props) => {
    return (
        <div className="menu-cards">
            <img src={props.item.photo} className="menu-img"/>
            <p>{props.item.dish}</p>
            <p>{props.item.price}</p>
            <p>{props.item.description}</p>

            <div className="btn">
                <button onClick={() => props.AddCart(props.item)}>Add to Cart</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return {
         _products: state._reducer,
       };
}

function mapDispatchToProps(dispatch){
    return {
        AddCart: item => dispatch(AddCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCard)

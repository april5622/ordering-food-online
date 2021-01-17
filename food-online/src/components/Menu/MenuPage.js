import React, { useEffect } from 'react';
import { getMenuByRestId } from "../../store/action/index";
import { connect } from "react-redux";
import MenuCard from "./MenuCard";
import "../../css/Menu.css";
import { useRouteMatch } from 'react-router-dom';

const MenuPage = (props, getMenuByRestId, isFetching, error) => {
    const match = useRouteMatch();

    useEffect(()=> {
        props.getMenuByRestId(match.params.id);
        console.log("props", props)
     }, [getMenuByRestId]);
    
     if (isFetching) {
         return <h2>Fetching Menu</h2>
     } 
    
     if (error) {
         return <h2>{error}</h2>
     }

    return (
        <div className="menu-page">
            {props.menu.map(item => {
               return <MenuCard key={item.id} item={item}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        menu: state.menu,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps,{getMenuByRestId})(MenuPage);

//export default MenuPage

// need to get specific restaurant id for the menu

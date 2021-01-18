import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import "../css/Navigation.css";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/cart">CartCart <span>{props.cartItem}</span></NavLink>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    cartItem: state.cartItem
  }
}

export default connect(mapStateToProps, null)(Navigation);

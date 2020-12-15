import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/cart">Cart{/* Cart <span>{cart.length}</span> */}</NavLink>
    </div>
  );
};

export default Navigation;

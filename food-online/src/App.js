import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import Navigation from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <PrivateRoute path="/cart">
        <ShoppingCart />
      </PrivateRoute>

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route path="/login">
        <LoginPage/>
      </Route>

    </div>
  );
}

export default App;

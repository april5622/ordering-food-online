import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import Navigation from "./components/Navigation";
import ShoppingCart from "./components/ShoppingCart";
import RegisterPage  from "./components/RegisterPage";
import MenuPage from "./components/Menu/MenuPage";


function App() {
  return (
    <div className="App">
      <Navigation />
      
      <PrivateRoute path="/cart">
        <ShoppingCart />
      </PrivateRoute>

     {/* restaurant page */}
      <Route exact path="/">
        <Homepage />
      </Route>

      {/* menu for that specific restaurant */}
      <Route path="/restaurants/:id">
        <MenuPage/>
      </Route>

      <Route path="/login">
        <LoginPage/>
      </Route>

      <Route path="/register">
        <RegisterPage/>
      </Route>

    </div>
  );
}

export default App;

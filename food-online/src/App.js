import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/">
        <Homepage />
      </Route>

      {/* <Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route> */}
    </div>
  );
}

export default App;

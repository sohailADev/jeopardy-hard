import React from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import { Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Cars from "./components/cars/Cars";
import CarDetail from "./components/cardetail/CarDetail";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="restOfCompononets">
          <Route
            exact
            path="/"
            render={(props) => <Welcome {...props} name="king" />}
          />
          <Route exact path="/clock" component={Clock} />
          <Route exact  path="/contact" component={Contact} />
          <Route exact path="/jeopardy" component={Jeopardy} />
          <Route exact path="/cars" component={Cars} />
          <Route exact path="/cars/:id" component={CarDetail} />
          <Route exact path="/login" render={(props) => <Login {...props} title="loginpage"  />}  />
          <Route exact path="/signup" component={Signup} />
        </div>
    </div>
  );
}

export default App;

import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import MyComponent from "./MyComponent";

import "./App.css";

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          console.log(drizzle)
          console.log(drizzleState)

          return (
            <Router>
              <div className="App">
                <Navbar />
                <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </div>
            </Router>
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;

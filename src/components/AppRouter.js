import "./AppRouter.css";
import React from "react";
import SignIn from "./SignIn.js";
import VerbsContainer from "./verbs/VerbsContainer.js";
import Navbar from "./Navbar.js";
import VerbsFilling from "./verbs/VerbsFilling.js";
import WelcomeContainer from "./WelcomeContainer.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

const AppRouter = () => (<Router>
  <div>
    <Navbar/>
    <div>
      <Route path="/" exact="exact" component={VerbsFilling}/>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/verbs" component={VerbsContainer}/>
      <Route path="/testing" component={WelcomeContainer}/>
    </div>
  </div>
</Router>);

export default AppRouter;

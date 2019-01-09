import "./AppRouter.css";
import React from "react";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Terms from "./Terms.js";
import Rememberme from "./Rememberme.js";
import VerbsContainer from "./verbs/VerbsContainer.js";
import Navbar from "./Navbar.js";
import Loading from "./Loading.js";
import VerbsFilling from "./verbs/VerbsFilling.js";
import WelcomeContainer from "./WelcomeContainer.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

const AppRouter = () => (<Router>
  <div>
    <Navbar/>
    <div>
      <Route path="/" exact="exact" component={VerbsFilling}/>
      <Route path="/log-in" component={LogIn}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/verbs" component={VerbsContainer}/>
      <Route path="/testing" component={WelcomeContainer}/>
    </div>
  </div>
</Router>);

export default AppRouter;

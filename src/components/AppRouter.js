import "./AppRouter.css";
import React from "react";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import VerbsContainer from "./verbs/VerbsContainer.js";
import Navbar from "./Navbar.js";
import Tryagain from "./Tryagain.js";
import Loading from "./Loading.js";
import VerbsFilling from "./verbs/VerbsFilling.js";
import ImagePhrase from "./verbs/ImagePhrase.js";
import WelcomeContainer from "./WelcomeContainer.js";
import {BrowserRouter as Router, Route} from "react-router-dom";

const AppRouter = () => (<div>
  <Router>
    <div>
      <Navbar/>
      <Route path="/" exact="exact" component={WelcomeContainer}/>
      <Route path="/log-in" component={LogIn}/>
      <Route path="/loading" component={Loading}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/verbs" component={VerbsFilling}/>
      <Route path="/welcome" component={WelcomeContainer}/>
      <Route path="/verbs-memory" component={VerbsContainer}/>
      <Route path="/image" component={ImagePhrase}/>
      <Route path="/try-again" component={Tryagain}/>
      <Route path="/testing" component={VerbsFilling}/>


    </div>
  </Router>
</div>);

export default AppRouter;

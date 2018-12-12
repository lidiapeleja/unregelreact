import "./AppRouter.css";
import React from "react";
import SignIn from "./SignIn.js";
import Heart from "./Heart.js";
import Verbs from "./Verbs.js";
import Navbar from "./Navbar.js";
import Points from "./Points.js";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const AppRouter = () => (<Router>
  <div>
    <Navbar/>
    <div>
      <Route path="/" exact="exact" component={Verbs}/>
      <Route path="/signIn/" component={SignIn}/>
      <Route path="/verbs/" component={Heart}/>
    </div>
  </div>
</Router>);

export default AppRouter;

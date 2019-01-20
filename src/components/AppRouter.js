import "./AppRouter.css";
import React from "react";
import LogIn from "./auth/LogIn.js";
import SignUp from "./auth/SignUp.js";
import VerbsContainer from "./verbs/VerbsContainer.js";
import Navbar from "./navbar/Navbar.js";
import Tryagain from "./Tryagain.js";
import Loading from "./Loading.js";
import VerbsFilling from "./verbs/VerbsFilling.js";
import HeartPoints from "./verbs/HeartPoints.js";
import ImagePhrase from "./verbs/ImagePhrase.js";
import Home from "./home/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = props => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact="exact" component={Home} />
          <Route path="/loading" component={Loading} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route
            path="/verbs-memory"
            render={routeProps => (
              <VerbsContainer
                {...routeProps}
                points={props.points}
                verbs={props.verbs}
                addVerb={props.addVerb}
                incrementPoint={props.incrementPoint}
              />
            )}
          />

          {/* UNDER CONSTRUCTION */}
          <Route
            path="/verbs-filling"
            render={routeProps => (
              <VerbsFilling
                {...routeProps}
                addPoints={props.addPoints}
                currentVerb={props.currentVerb}
                isItCorrect={props.isItCorrect}
                points={props.points}
                goToNextPage={props.goToNextPage}
                goToTryAgain={props.goToTryAgain}
                goToNextVerb={props.goToNextVerb}
                handleKeyPress={props.handleKeyPress}
              />
            )}
          />
          <Route
            path="/image"
            render={routeProps => (
              <ImagePhrase {...routeProps} points={props.points} />
            )}
          />
          <Route path="/try-again" component={Tryagain} />
          <Route
            path="/testing"
            render={routeProps => <HeartPoints points={props.points} />}
          />
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;

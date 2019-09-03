import React from "react";
import Home from "./home/Home.js";
import Navbar from "./navbar/Navbar.js";
import Loading from "./Loading.js";
import Tryagain from "./Tryagain.js";
import Heart from "./exercises/Heart.js";
import YouAreAwesome from "./YouAreAwesome.js";
import MemorizeVerbs from "./exercises/MemorizeVerbs.js";
import FillVerbs from "./exercises/FillVerbs.js";
import HeartPoints from "./exercises/HeartPoints.js";
import ImagePhrase from "./exercises/ImagePhrase.js";
import Congrats from "./exercises/Congrats.js";
import ProgressBar from "./exercises/ProgressBar.js";
import NotFound from "./exercises/NotFound.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = props => {
  return (
    <div>
      <Router>
        <Switch>
        <div>
          <Navbar alertExit={props.alertExit} />
          <ProgressBar percentage={props.percentage} />
            <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={Loading} />
          <Route
            exact path="/exercises/memorize"
            render={routeProps => (
              <MemorizeVerbs
                {...routeProps}
                points={props.points}
                hearts={props.hearts}
                incrementPoint={props.incrementPoint}
                currentVerb={props.currentVerb}
              />
            )}
          />

          <Route
            exact path="/exercises/fill"
            render={routeProps => (
              <FillVerbs
                {...routeProps}
                addPoints={props.addPoints}
                currentVerb={props.currentVerb}
                isItCorrect={props.isItCorrect}
                points={props.points}
                goToNextPage={props.goToNextPage}
                goToTryAgain={props.goToTryAgain}
                youAreAwesome={props.youAreAwesome}
                incrementCurrentVerbIdx={props.incrementCurrentVerbIdx}
                handleKeyPress={props.handleKeyPress}
                hearts={props.hearts}
                loseHeart={props.loseHeart}
                fromIndextoPercentage={props.fromIndextoPercentage}
              />
            )}
          />
          <Route
              exact path="/image"
            render={routeProps => (
              <ImagePhrase {...routeProps}
                points={props.points}
                currentVerb={props.currentVerb}
                 />
            )}
          />
          <Route exact path="/try-again" component={Tryagain} />
          <Route exact path="/well-done" component={YouAreAwesome} />
          <Route
              exact path="/testing"
            render={routeProps => <HeartPoints points={props.points}
            />}
          />
          <Route
              exact path="/hearts"
              render={routeProps => <Heart hearts={props.hearts}
              />}
          />
          <Route exact path="/congrats" render={routeProps => <Congrats points={props.points}
          />}/>
          <Route component={NotFound} />
        </div>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;

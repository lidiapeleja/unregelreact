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

import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = props => {
  return (
    <div>
      <Router>
        <div>
          <Navbar alertExit={props.alertExit} />
          <ProgressBar percentage={props.percentage} />
            <Route path="/" exact="exact" component={Home} />
          <Route path="/loading" component={Loading} />
          <Route
            path="/exercises/memorize"
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
            path="/exercises/fill"
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
            path="/image"
            render={routeProps => (
              <ImagePhrase {...routeProps}
                points={props.points}
                currentVerb={props.currentVerb}
                 />
            )}
          />
          <Route path="/try-again" component={Tryagain} />
          <Route path="/well-done" component={YouAreAwesome} />
          <Route
            path="/testing"
            render={routeProps => <HeartPoints points={props.points}
            />}
          />
          <Route
              path="/hearts"
              render={routeProps => <Heart hearts={props.hearts}
              />}
          />
          <Route path="/congrats" render={routeProps => <Congrats points={props.points}
          />}/>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;

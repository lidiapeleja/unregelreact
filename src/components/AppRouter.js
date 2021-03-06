import React from "react";
import Home from "./home/Home.js";
import Navbar from "./navbar/Navbar.js";
import Loading from "./Loading.js";
import Tryagain from "./Tryagain.js";
import Heart from "./exercises/Heart.js";
import YouAreAwesome from "./YouAreAwesome.js";
import MemorizeVerbs from "./exercises/MemorizeVerbs.js";
import FillVerbs from "./exercises/FillVerbs.js";
import ImagePhrase from "./exercises/ImagePhrase.js";
import Congrats from "./exercises/Congrats.js";
import ProgressBar from "./exercises/ProgressBar.js";
import NotFound from "./exercises/NotFound.js";
import Menu from "./Menu"; 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = props => {
  return (
    <div>
      <Router>
        <div>
          <Navbar resetState={props.resetState} />
          <ProgressBar percentage={props.percentage} />
          <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={Loading} />
          <Route
            exact path="/irregularverbs/memorize"
            render={routeProps => (
              <MemorizeVerbs
                {...routeProps}
                points={props.points}
                hearts={props.hearts}
                incrementPoint={props.incrementPoint}
                currentVerb={props.currentVerb}
                currentVerbIdx={props.currentVerbIdx}
              />
            )}
          />

          <Route
            exact path="/irregularverbs/test"
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
                resetState={props.resetState}
              />
            )}
          />
          <Route
              exact path="/irregularverbs/tip"
            render={routeProps => (
              <ImagePhrase {...routeProps}
                points={props.points}
                currentVerb={props.currentVerb}
                 />
            )}
          />
          <Route exact path="/irregularverbs/try-again" component={Tryagain} />
          <Route exact path="/irregularverbs/verbcorrect" component={YouAreAwesome} />
          <Route
              exact path="/menu"
            component={Menu}
            />}
          />
          <Route
              exact path="/hearts"
              render={routeProps => <Heart 
                hearts={props.hearts}
                points={props.points}
              />}
          />
          <Route exact path="/irregularverbs/congratulations" render={routeProps => <Congrats points={props.points}
          />}/>
          <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPoop } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import verbsData from "./data/verbs.json";
// import {INIT_IDX} from './config'

library.add(fab, faPoop, faHeart);

const WORDS_PER_POINT = 3;
const REPETITIONS = 6;

// function deepCopy(o) {
//   return JSON.parse(JSON.stringify(o));
// }

// function resetVerbs() {
//   console.log("reset verbs has been executed");
//   return {
//     initialVerbs: deepCopy(INITIAL_VERBS),
//     newVerbs: deepCopy(NEW_VERBS)
//   };
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      // verbs: resetVerbs(),
      points: 0,
      callCount: 0,
      currentVerbIdx: 0
    };

    // verbs
    this.addVerb = this.addVerb.bind(this);
    this.incrementCurrentVerbIdx = this.incrementCurrentVerbIdx.bind(this);

    // points
    this.incrementPoint = this.incrementPoint.bind(this);
    this.addPoints = this.addPoints.bind(this);

    // routing
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToTryAgain = this.goToTryAgain.bind(this);
  }

  /////// Logics from VerbsMemory ////

  addVerb(routerHistory) {
    this.setState(state => {
      state.callCount = state.callCount + 1;
      if (state.callCount >= WORDS_PER_POINT * REPETITIONS) {
        routerHistory.push("/exercises/fill");
        return;
      }

      if (state.verbs.newVerbs.length === 0) {
        // state.verbs = resetVerbs();
        this.incrementPoint();
        return state;
      }

      const verb = state.verbs.newVerbs.shift();
      state.verbs.initialVerbs.push(verb);

      state.verbs = {
        initialVerbs: state.verbs.initialVerbs,
        newVerbs: state.verbs.newVerbs
      };
      return state;
    });
  }

  incrementCurrentVerbIdx() {
    this.setState(state => ({
      currentVerbIdx: this.state.currentVerbIdx + 1
    }));
  }

  incrementPoint() {
    this.setState(state => ({
      points: this.state.points + 1
    }));
  }

  /*
   * logics from adding points when answer is correct in Filling Points
   */
  addPoints(points) {
    this.setState(state => ({
      points: this.state.points + points
    }));
  }

  ////// Logics from verbsfilling //

  // from verbsFilling to
  goToNextPage(routerHistory) {
    routerHistory.push("/exercises/memorize");
  }

  // from verbsFilling to
  goToTryAgain(routerHistory) {
    routerHistory.push("/try-again");
  }

  render() {
    const currentVerb = {
      idx: this.state.currentVerbIdx,
      verb: verbsData.verbs[this.state.currentVerbIdx]
    };

    return (
      <div>
        <AppRouter
          points={this.state.points}
          currentVerb={currentVerb}
          incrementCurrentVerbIdx={this.state.incrementCurrentVerbIdx}
          addVerb={this.addVerb}
          addPoints={this.addPoints}
          goToNextPage={this.goToNextPage}
          goToTryAgain={this.goToTryAgain}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPoop } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { withRouter } from "react-router-dom";
import {VERBS_ORDERED, WORDS_PER_POINT, REPETITIONS, INITIAL_HEARTS} from "./config"
library.add(fab, faPoop, faHeart);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      points: 0,
      callCount: 0,
      currentVerbIdx: 0,
      hearts: INITIAL_HEARTS,
      percentage: 0,
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

    //hearts
    this.loseHeart = this.loseHeart.bind(this);

    this.startAgain = this.startAgain.bind(this);
    this.fromIndextoPercentage = this.fromIndextoPercentage.bind(this);


  }

  // Logics from VerbsMemory
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
        this.fromIndextoPercentage();
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

  // Logics from verbsfilling

  // from verbsFilling to
  goToNextPage(routerHistory) {
    routerHistory.push("/exercises/memorize");
  }

  // from verbsFilling to
  goToTryAgain(routerHistory) {
    routerHistory.push("/try-again");
  }

  // from verbsFilling to
  youAreAwesome(routerHistory) {
    routerHistory.push("/well-done");
  }

  // from Game over to Play Again

  startAgain(routerHistory) {
    routerHistory.push("/");
  }

  // multiply index of verbs * 4 so you get the % for progress bar

  fromIndextoPercentage(){
  this.setState(state => ({
  percentage: this.state.currentVerbIdx * 4
}));
  console.log("fromIndextoPercentage has ben called");
  }

  loseHeart(routerHistory){
    if(this.state.hearts <= 1){
        alert("Game over! POINTS: " + this.state.points);
    this.setState( state =>({
        points: 0,
    }));
    this.startAgain(routerHistory);
      return;
    } else {
        this.setState(state =>({
            hearts: state.hearts - 1
        }));
        console.log("you have lost one heart");
    }
  }


  render() {
    const currentVerb = VERBS_ORDERED[this.state.currentVerbIdx];

    return (
      <div>
        <AppRouter
          currentVerb={currentVerb}
          points={this.state.points}
          hearts={this.state.hearts}
          incrementCurrentVerbIdx={this.incrementCurrentVerbIdx}
          addVerb={this.addVerb}
          addPoints={this.addPoints}
          incrementPoint={this.incrementPoint}
          goToNextPage={this.goToNextPage}
          youAreAwesome={this.youAreAwesome}
          goToTryAgain={this.goToTryAgain}
          loseHeart={this.loseHeart}
          fromIndextoPercentage={this.fromIndextoPercentage}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

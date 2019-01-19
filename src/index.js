import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import Points from "./components/verbs/Points";
import VerbsContainer from "./components/verbs/VerbsContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faPoop} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router-dom'
import Marginpx from "./components/Marginpx";
import verbsData from './data/verbs.json';
import {INIT_IDX} from './config'

library.add(fab, faPoop, faHeart)

const firstVerb = verbsData.verbs[INIT_IDX];
const INITIAL_VERBS = [firstVerb.infinitive];
const NEW_VERBS = [firstVerb.pastTense, firstVerb.pastParticiple];
const WORDS_PER_POINT = 3;
const REPETITIONS = 6;

function deepCopy(o) {
  return JSON.parse(JSON.stringify(o));
};

function resetVerbs() {
  console.log("reset verbs has been executed");
  return {initialVerbs: deepCopy(INITIAL_VERBS), newVerbs: deepCopy(NEW_VERBS)};
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      verbs: resetVerbs(),
      points: 0,
      callCount: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.addVerb = this.addVerb.bind(this);
    this.incrementPoint = this.incrementPoint.bind(this);
    this.addPoints = this.addPoints.bind(this);

    // This this are from Verbs filling
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToTryAgain = this.goToTryAgain.bind(this);
  }

  /////// Logics from VerbsMemory ////////

  addVerb(routerHistory) {
    this.setState(state => {
      state.callCount = state.callCount + 1;
      if (state.callCount >= WORDS_PER_POINT * REPETITIONS) {
        routerHistory.push('/verbs-filling');
        return;
      }

      if (state.verbs.newVerbs.length === 0) {
        state.verbs = resetVerbs();
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

  incrementPoint() {
    this.setState(state => ({
      points: this.state.points + 1
    }));
  };

  /*
  * logics from adding points when answer is correct in Filling Points
  */
  addPoints(points) {
    this.setState(state => ({
      points: this.state.points + points
    }));
  }

  ////// Logics from verbsfilling //////

  // from verbsFilling to
  goToNextPage(routerHistory) {
    routerHistory.push('/image');
  };

  // from verbsFilling to

  goToTryAgain(routerHistory) {
    routerHistory.push('/try-again');
  };

  render() {
    return (<div>
      <AppRouter points={this.state.points} firstVerb={firstVerb} verbs={this.state.verbs} addVerb={this.addVerb} incrementPoint={this.incrementPoint} goToNextPage={this.goToNextPage} goToTryAgain={this.goToTryAgain} handleKeyPress={this.handleKeyPress} addPoints={this.addPoints}/>
    </div>)
  }
};

ReactDOM.render(<App/>, document.querySelector("#root"));

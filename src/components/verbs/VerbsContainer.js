import "./VerbsContainer.css";
import React from "react";
import HeartPoints from "./HeartPoints";
import Marginpx from "../Marginpx";
import {withRouter} from 'react-router-dom'
import verbsData from '../../data/verbs.json';
import {INIT_IDX} from '../../config'

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

class VerbsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verbs: resetVerbs(),
      points: 0,
      callCount: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.addVerb = this.addVerb.bind(this);
    this.incrementPoint = this.incrementPoint.bind(this);
  }

  addVerb() {
    this.setState(state => {
      state.callCount = state.callCount + 1;
      if (state.callCount >= WORDS_PER_POINT * REPETITIONS) {
        this.props.history.push('/verbs');
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

  render() {
    return (<div onClick={this.addVerb} className="container-verbs">
      <HeartPoints points={this.state.points}/> <Marginpx/> {
        this.state.verbs.initialVerbs.map((verb) => <div>
          <h1>{verb}</h1>
        </div>)
      }
    </div>);
  }
}

export default withRouter(VerbsContainer);

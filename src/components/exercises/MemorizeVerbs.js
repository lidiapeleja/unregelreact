import React from "react";
import HeartPoints from "./HeartPoints";
import Marginpx from "../ui/Marginpx";
import {withRouter} from "react-router-dom";
import "./MemorizeVerbs.css";

class MemorizeVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      conjugationCount: 0
    };

    // verbs
    this.nextConjugation = this.nextConjugation.bind(this);
  }

  nextConjugation() {
    this.setState(state => ({
      conjugationCount: state.conjugationCount + 1
    }));
  }

  render() {
    const {currentVerb, points} = this.props;
    const {conjugationCount} = this.state;
    
    const conjugations = calcConjugations(conjugationCount, currentVerb);

    return (<div onClick={this.nextConjugation
} className="container-verbs">
      <HeartPoints points={points}/>
      <Marginpx/> {
        conjugations.map(conjugation => (<div>
          <h1>
            {conjugation}
          </h1>
        </div>))
      }
    </div>);
  }
}

function calcConjugations(count, verb) {
  if (count === 0) {
    return [verb.infinitive];
  } else if (count === 1) {
    return [verb.infinitive, verb.pastTense];
  } else if (count === 2) {
    return [verb.infinitive, verb.pastTense, verb.pastParticiple];
  } else {
    throw new Error(`Illegal conjugation count=${count}`)
  }
}

export default withRouter(MemorizeVerbs);

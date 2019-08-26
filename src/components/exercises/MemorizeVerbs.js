import React from "react";
import HeartPoints from "./HeartPoints";
import {withRouter} from "react-router-dom";
import "./MemorizeVerbs.css";

class MemorizeVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      conjugationCount: 0,
      roundsCompleted: 0
    };

    // verbs
    this.nextConjugation = this.nextConjugation.bind(this);
  }

  nextConjugation() {
    this.setState(state => {
      if (state.roundsCompleted > 4) {
        this.props.history.push("/exercises/fill")
        return ({
            conjugationCount: 0,
            roundsCompleted: 0
          });
      } else if (state.conjugationCount < 2) {
        return ({
            conjugationCount: state.conjugationCount + 1
          });
      } else {
        this.props.incrementPoint();
        return ({
            conjugationCount: 0,
            roundsCompleted: state.roundsCompleted + 1
          });
      }
    });
  }

  render() {
    const {currentVerb, points, hearts} = this.props;
    const {conjugationCount} = this.state;

    const conjugations = calcConjugations(conjugationCount, currentVerb);

    return (<div onClick={this.nextConjugation
} className="whole-container">
      <HeartPoints points={points} hearts={hearts}/>
      <div className="container-verbs">
       {
        conjugations.map(conjugation => (<div>
          <h1>
            {conjugation}
          </h1>
        </div>))
      }
      </div>
    </div>);
  }
}

function calcConjugations(count, verb) {
  if (count === 0) {
    return [verb.infinitive1 + verb.vowel1 + verb.infinitive2];
  } else if (count === 1) {
    return [verb.infinitive1 + verb.vowel1 + verb.infinitive2, verb.pastTense1 + verb.vowel2 + verb.pastTense2];
  } else if (count === 2) {
    return [verb.infinitive1 + verb.vowel1 + verb.infinitive2, verb.pastTense1 + verb.vowel2 + verb.pastTense2, verb.pastParticiple0 + " " + verb.pastParticiple1 + verb.vowel3 + verb.pastParticiple2];
  } else {
    throw new Error(`Illegal conjugation count=${count}`)
  }
}

export default withRouter(MemorizeVerbs);

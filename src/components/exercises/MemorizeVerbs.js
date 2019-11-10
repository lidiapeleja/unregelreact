import React from "react";
import HeartPoints from "./HeartPoints";
import {withRouter} from "react-router-dom";
import "./MemorizeVerbs.css";
import {Helmet} from "react-helmet";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class MemorizeVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      conjugationCount: 0,
      roundsCompleted: 0,
      run: true,
    };

    // verbs
    this.nextConjugation = this.nextConjugation.bind(this);
    this.showUIalert = this.showUIalert.bind(this);
  };
j

  nextConjugation() {
    this.setState(state => {
      if (state.roundsCompleted > 4) {
        this.props.history.push("/irregularverbs/test")
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

    showUIalert(){
      if (this.props.currentVerbIdx === 0 && this.props.hearts > 4) {
        console.log ("currentVerbIdx is 0");
        MySwal.fire({
          title: "Click on screen 👆to make verbs appear",
          confirmButtonColor: '#ff0266',
          // background: '#ffde03',
          background: 'black',
          confirmButtonText: 'Understood'
      });
      }
    }
    
    componentDidMount() {
      this.showUIalert(); 
    }


  render() {
    const {currentVerb, points, hearts} = this.props;
    const {conjugationCount} = this.state;
    const { steps, run } = this.state;

    const conjugations = calcConjugations(conjugationCount, currentVerb);

    return (<div onClick={this.nextConjugation
} className="whole-container steps-verbs">
     <Helmet>
        <meta name="description" content="practise and memorise the list of german irregular verbs in a fun way" />
    </Helmet>
      <div>
      <div className="steps-pointshearts"><HeartPoints points={points} hearts={hearts} /></div>
      <div className="container-verbs">
       {
        conjugations.map((conjugation, idx) => (<div key={idx.toString()}>
          <h1>
            {conjugation}
          </h1>
        </div>))
      }
      </div>
      </div>
    </div>);
  }
}

function calcConjugations(count, verb) {
  const conj1 = (<React.Fragment>{verb.infinitive1}<span className="vowelspink">{verb.vowel1}</span>{verb.infinitive2}</React.Fragment>);
  const conj2 = (<React.Fragment>{verb.pastTense1}<span className="vowelspink">{verb.vowel21 + verb.vowel22 }</span>{verb.pastTense2}</React.Fragment>);
  const conj3 = (<React.Fragment>{verb.pastParticiple0} {verb.pastParticiple1}<span className="vowelspink">{verb.vowel31 + verb.vowel32}</span>{verb.pastParticiple2}</React.Fragment>);

  if (count === 0) {
    return [conj1];
  } else if (count === 1) {
    return [conj1, conj2];
  } else if (count === 2) {
    return [conj1, conj2, conj3];
  } else {
    throw new Error(`Illegal conjugation count=${count}`)
  }
}

export default withRouter(MemorizeVerbs);

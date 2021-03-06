import React from "react";
import HeartPoints from "./HeartPoints";
import {withRouter} from "react-router-dom";
import "./MemorizeVerbs.css";
import {Helmet} from "react-helmet";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const MySwal = withReactContent(Swal);

class MemorizeVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      // Global value for whole list of verbs in App
      conjugationCount: 0,
      //  Round counted after 3 times clicked 
      roundsCompleted: 1,
      run: true,
    };

    // verbs
    this.nextConjugation = this.nextConjugation.bind(this);
    this.showUIalert = this.showUIalert.bind(this);

  };

j

  nextConjugation() {
    this.setState(state => {
      if (state.roundsCompleted >= 5) {
        console.log("rounds compleated: " + state.roundsCompleted);
        this.props.history.push("/irregularverbs/test")
        return ({
            conjugationCount: 0,
            roundsCompleted: 0
          });
      } else if (state.conjugationCount < 2) {
        console.log("state.conjugationCount is < 2 so els if is called; return: conjungationCount is: " + state.conjugationCount);
        return ({
            conjugationCount: state.conjugationCount + 1
          });
      } else if (state.roundsCompleted === 4 && state.conjugationCount === 2 ) {
        console.log("I am going to test NOWWWW!!!");
        this.props.history.push("/irregularverbs/test");

      //   setTimeout(
      //     function() {
      //       this.props.history.push("/irregularverbs/test");
      //     }
      //     .bind(this),
      //     3000
      // );
        return;
      } else {
        console.log("else statement has entered, where value for conjugationCount is: " + state.conjugationCount + "and value for roundsCompleted is: " + state.roundsCompleted);
        return ({
            conjugationCount: 0,
            roundsCompleted: state.roundsCompleted + 1
          });
      }
    });
  }

    showUIalert(){
      if (this.props.currentVerbIdx === 0 && this.props.hearts > 4) {
        MySwal.fire({
          title: "Click on screen 👆to make verbs appear",
          confirmButtonColor: '#ff0266',
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
    const {roundsCompleted} = this.state;

    const conjugations = calcConjugations(conjugationCount, currentVerb);

    return (<div onClick={this.nextConjugation
} className="whole-container steps-verbs">
     <Helmet>
        <meta name="description" content="practise and memorise the list of german irregular verbs in a fun way" />
    </Helmet>
      <div>
      <div className="steps-pointshearts"><HeartPoints points={points} hearts={hearts} /></div>
      <div className="wrapper_circularprogressbar animated bounceIn">
        <span className="repetitions animated bounceIn">Repetitions: </span>
        <CircularProgressbar
  value={`${roundsCompleted}`}
  maxValue={4}
  text={`${roundsCompleted}`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
 
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',
 
    // Text size
    textSize: '3rem',
 
    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,
 
    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',
 
    // Colors
    pathColor: `rgba(255, 2, 102, 1)`,
    textColor: 'black',
    trailColor: 'white',
    backgroundColor: 'white',
  })}
/>
</div>
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

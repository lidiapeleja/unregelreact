import React from "react";
import HeartPoints from "./HeartPoints";
import {withRouter} from "react-router-dom";
import "./MemorizeVerbs.css";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);


class MemorizeVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      conjugationCount: 0,
      roundsCompleted: 0,
      isBorderDisplayed: false
    };

    // verbs
    this.nextConjugation = this.nextConjugation.bind(this);
  };


    componentDidMount() {
      const {currentVerbIdx} = this.props;
      if (currentVerbIdx === 0 && this.props.hearts >= 5) {
        setTimeout(() => {
          MySwal.fire({
            title: 'Click on screen 👆🏽',
            text: 'Click to make verbs appear',
            background: '#ffde03',
            confirmButtonColor: '#ff0266'
        }).then((result) => {
          this.setState(state => ({
            isBorderDisplayed : true
          }));
          console.log(this.state.isBorderDisplayed)
          setTimeout(() => {
            this.setState(state => ({
              isBorderDisplayed : false
            }));
          }, 3000);
            } 
        );
        }, 2000);
        console.log(this.state.isBorderDisplayed)
      }
      else {
        this.setState(state => ({
          isBorderDisplayed : false
        }));
      }
    }


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

  render() {
    const {currentVerb, points, hearts} = this.props;
    const {conjugationCount} = this.state;

    const conjugations = calcConjugations(conjugationCount, currentVerb);

    return (<div onClick={this.nextConjugation
} className="whole-container">
      <div className={this.state.isBorderDisplayed ? 'dotsuiactive' : "dotsuiunactive"}>

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

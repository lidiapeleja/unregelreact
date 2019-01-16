import React from "react";
import "./VerbsFilling.css";
import HeartPoints from "./HeartPoints";
import Marginpx from "../Marginpx";
import verbsData from '../../data/verbs.json';
import {withRouter} from 'react-router-dom'
import {INIT_IDX} from '../../config'

const firstVerb = verbsData.verbs[INIT_IDX];

class VerbsFilling extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToTryAgain = this.goToTryAgain.bind(this);
    this.isItCorrect = this.isItCorrect.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/image');
    return;
  };

  goToTryAgain() {
    this.props.history.push('/try-again');
    return;
  };

  state = {
    vowel2: "",
    vowel3: ""
  };

  isItCorrect(e) {
    const isVowelsCorrect = this.state.vowel2 === firstVerb.vowel2 && this.state.vowel3 === firstVerb.vowel3;
    const isVowelsNotEmpty = this.state.vowel2 !== '' && this.state.vowel3 !== '';

    if (isVowelsCorrect) {
      console.log("vowels correct!!!");
      this.goToNextPage();
    } else if (isVowelsNotEmpty) {
      // precondition: vowels are not correct
      console.log("try again!!!");
      this.goToTryAgain();
    }
  }

  render() {
    return (<form onKeyPress={this.isItCorrect}><HeartPoints points={this.props.points}/>
    <Marginpx/>
      <div className="verbsfilling">
        <h1>
          {firstVerb.infinitive}
        </h1>
        <h1>
          {firstVerb.pastTense1}
          <input type="text" value={this.state.vowel2} onChange={(e) => this.setState({vowel2: e.target.value})} maxLength="2"/>{firstVerb.pastTense2}
        </h1>
        <h1>
          {firstVerb.pastParticiple0}{" "}
          {firstVerb.pastParticiple1}
          <input type="text" value={this.state.vowel3} onChange={(e) => this.setState({vowel3: e.target.value})} maxLength="2"/>{firstVerb.pastParticiple2}
        </h1>
      </div>
    </form>)
  }
}

export default withRouter(VerbsFilling);

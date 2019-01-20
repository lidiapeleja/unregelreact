import React from "react";
import "./VerbsFilling.css";
import HeartPoints from "./HeartPoints";
import Marginpx from "../Marginpx";
import verbsData from '../../data/verbs.json';
import {withRouter} from 'react-router-dom'
import {isVowelsCorrect} from './verbs-helper'

class VerbsFilling extends React.Component {

  constructor() {
    super();

    this.state = {
      vowel2: "",
      vowel3: ""
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      console.log('enter has been clicked!')
      if (isVowelsCorrect(this.state.vowel2, this.props.firstVerb.vowel2, this.state.vowel3, this.props.firstVerb.vowel3)) {
        this.props.addPoints(10);
        this.props.goToNextPage(this.props.history);
        this.props.goToNextVerb();

      } else {
        this.props.goToTryAgain(this.props.history);
      }
    }
  };

  render() {
    return (<form onKeyPress={this.handleKeyPress}><HeartPoints points={this.props.points}/>
      <Marginpx/>
      <div className="verbsfilling">
        <h1>
          {this.props.currentVerb.infinitive}
        </h1>
        <h1>
          {this.props.currentVerb.pastTense1}
          <input type="text" value={this.state.vowel2} onChange={(e) => this.setState({vowel2: e.target.value})} maxLength="2"/>{this.props.currentVerb.pastTense2}
        </h1>
        <h1>
          {this.props.currentVerb.pastParticiple0}{" "}
          {this.props.currentVerb.pastParticiple1}
          <input type="text" value={this.state.vowel3} onChange={(e) => this.setState({vowel3: e.target.value})} maxLength="2"/>{this.props.currentVerb.pastParticiple2}
        </h1>
      </div>
    </form>)
  }
}

export default withRouter(VerbsFilling);

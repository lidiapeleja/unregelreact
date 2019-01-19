import React from "react";
import "./VerbsFilling.css";
import HeartPoints from "./HeartPoints";
import Marginpx from "../Marginpx";
import verbsData from '../../data/verbs.json';
import {withRouter} from 'react-router-dom'
import {handleKeyPress, isVowelsCorrect} from './verbs-helper'

class VerbsFilling extends React.Component {

  constructor() {
    super();

    this.state = {
      vowel2: "",
      vowel3: ""
    }

    this.handleKeyPress = handleKeyPress.bind(this);
  }

  render() {
    return (<form onKeyPress={this.handleKeyPress}><HeartPoints points={this.props.points}/>
      <Marginpx/>
      <div className="verbsfilling">
        <h1>
          {this.props.firstVerb.infinitive}
        </h1>
        <h1>
          {this.props.firstVerb.pastTense1}
          <input type="text" value={this.state.vowel2} onChange={(e) => this.setState({vowel2: e.target.value})} maxLength="2"/>{this.props.firstVerb.pastTense2}
        </h1>
        <h1>
          {this.props.firstVerb.pastParticiple0}{" "}
          {this.props.firstVerb.pastParticiple1}
          <input type="text" value={this.state.vowel3} onChange={(e) => this.setState({vowel3: e.target.value})} maxLength="2"/>{this.props.firstVerb.pastParticiple2}
        </h1>
      </div>
    </form>)
  }
}

export default withRouter(VerbsFilling);

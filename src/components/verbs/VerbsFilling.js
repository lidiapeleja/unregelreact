import React from "react";
import "./VerbsFilling.css";
import HeartPoints from "./HeartPoints";
import verbsData from '../../data/verbs.json';
import {withRouter} from 'react-router-dom'
import {IDX_ESSEN} from '../../utils/verbs-mapping'

const firstVerb = verbsData.verbs[IDX_ESSEN];

class VerbsFilling extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  }

  goToNextPage(target) {
    this.props.history.push('/image-essen');
    return;
  };

  state = {
    vowel2: "",
    vowel3: ""
  };

  isCorrect() {
    if (this.state.vowel2 === firstVerb.vowel2 && this.state.vowel3 === firstVerb.vowel3) {
      console.log("vowels correct!!!");
      this.goToNextPage();
      return;
    };
    if (this.state.vowel2 !== firstVerb.vowel2 && this.state.vowel3 !== firstVerb.vowel3) {
      return;
      console.log("try again!!!");
    }
  };

  render() {
    return (<form onKeyPress={this.isCorrect}><HeartPoints points={this.props.points}/>
      <div className="verbsfilling">
        <h1>
          {firstVerb.infinitive}
        </h1>
        <h1>
          {firstVerb.pastTense1}
          <input type="text" value={this.state.vowel2} onChange={(e) => this.setState({vowel2: e.target.value})} maxLength="2"/>{firstVerb.pastTense2}
        </h1>
        <h1>
          {firstVerb.pastParticiple0}
          {firstVerb.pastParticiple1}
          <input type="text" value={this.state.vowel3} onChange={(e) => this.setState({vowel3: e.target.value})} maxLength="2"/>{firstVerb.pastParticiple2}
        </h1>
      </div>
    </form>)
  }
}

export default withRouter(VerbsFilling);

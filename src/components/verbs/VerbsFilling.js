import React from "react";
import Heart from "./Heart";
import "./VerbsFilling.css";
import {withRouter} from 'react-router-dom'

class VerbsFilling extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  state = {
    vowel1: "",
    vowel2: "",
    vowel3: ""
  };

  goToNextPage(target) {
    if (target.charCode == 13) {
      this.props.history.push('/image')
      return;
  };
}

  render() {
    return (<form onKeyPress={this.goToNextPage}>
      <div className="verbsfilling"><Heart/>
        <h1>
          ess
          <input type="text" value={this.state.vowel1} onChange={(e) => this.setState({vowel1: e.target.value})} maxLength="1"/>
          n
        </h1>
        <h1>
          <input type="text" value={this.state.vowel2} onChange={(e) => this.setState({vowel2: e.target.value})} maxLength="1"/>
          ß
        </h1>
        <h1>
          geg
          <input type="text" value={this.state.vowel3} onChange={(e) => this.setState({vowel3: e.target.value})} maxLength="1"/>
          ssen
        </h1>
      </div>
    </form>)
  }
}

export default withRouter(VerbsFilling);

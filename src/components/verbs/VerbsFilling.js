import React from "react";
import Heart from "./Heart";
import "./VerbsFilling.css";

class VerbsFilling extends React.Component {
  state = { vowel1 : "", vowel2: "", vowel3 : ""};

  render() {
    return (<form>
      <div className="verbsfilling"><Heart/>
        <h1>
          bef
          <input type="text" value={this.state.vowel1} onChange={(e) => this.setState({vowel1: e.target.value})}  maxLength="1"/>
          hlen
        </h1>
        <h1>
          bef
          <input type="text" value={this.state.vowel2} onChange={(e) => this.setState({vowel2: e.target.value})} maxLength="1"/>
          hl
        </h1>
        <h1>
          bef
          <input type="text" value={this.state.vowel3} onChange={(e) => this.setState({vowel3: e.target.value})} maxLength="1"/>
          hlen
        </h1>
      </div>
    </form>)
  }
}

export default VerbsFilling;

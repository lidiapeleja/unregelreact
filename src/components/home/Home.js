import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.toNextPage = this.toNextPage.bind(this);
  }

  toNextPage() {
      this.props.history.push("/loading");
      return;
  }

  render() {
    return (
      <div className="containerwelcome">
        <div className="welcomecontainer">
          <div className="w2 animation1 animated fadeIn">Learn</div>
          <div className="w4 animation1 animated fadeIn">the</div>
          <div className="w1 animation2 animated fadeIn">174</div>
          <div className="w6 animation3 animated fadeIn">irregular</div>
          <div className="w5 animation4 animated fadeIn">German</div>
          <div className="w5 animation5 animated fadeIn">Verbs</div>
        </div>
          <div className="containerbuttonstart animated fadeIn delay-2s container">
            <button type="submit" onClick = {this.toNextPage} className="btn">START PLAYING</button>
          </div>
      </div>
    );
  }
}

export default withRouter(WelcomeContainer);

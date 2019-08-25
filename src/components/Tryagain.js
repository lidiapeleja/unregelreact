import React from "react";
import "./Tryagain.css";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPoop } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faPoop, faHeart);

class Tryagain extends React.Component {
  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.skipTipPage = this.skipTipPage.bind(this);

  }

  goToNextPage(target) {
    this.props.history.push("/image");
    console.log("going to image tip page");
    return;
  }

  skipTipPage(target) {
    this.props.history.push("/exercises/memorize");
    console.log("going to memory verbs directly");
    return;
  }

  render() {
    return (
      <div className="container tryagain">
        <div className="icon-poop animated shake">
          <h4 className="animated bounceIn">-5</h4>
          <FontAwesomeIcon icon={faPoop} />
        </div>
        <button onClick={this.goToNextPage} className="buttontip animated bounceIn delay-1s">Give me a tip </button>
        <p className="skiptext animated bounceIn delay-2s" onClick={this.skipTipPage}>Skip tip</p>
      </div>
    );
  }
}

export default withRouter(Tryagain);

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
  }

  goToNextPage(target) {
    this.props.history.push("/image");
    return;
  }

  render() {
    return (
      <div className="container tryagain">
        <div className="icon-poop animated shake">
          <FontAwesomeIcon icon={faPoop} />
        </div>
        <button onClick={this.goToNextPage} className="buttontip animated bounceIn delay-1s">Give me a tip </button>
      </div>
    );
  }
}

export default withRouter(Tryagain);

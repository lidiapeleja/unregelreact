import React from "react";
import "./YouAreAwesome.css";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPoop } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

library.add(faPoop, faThumbsUp);

class YouAreAwesome extends React.Component {
  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage(target) {
    this.props.history.push("/exercises/memorize");
    return;
  }

  render() {
    return (
      <div onClick={this.goToNextPage} className="container youareawesome">
        <div className="icon-poop animated bounceIn">
          <h4 className="animated bounceIn">+10</h4>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
      </div>
    );
  }
}

export default withRouter(YouAreAwesome);

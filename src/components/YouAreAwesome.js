import React from "react";
import "./YouAreAwesome.css";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPoop } from "@fortawesome/free-solid-svg-icons";

library.add(faPoop);

class YouAreAwesome extends React.Component {
  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage(target) {
    this.props.history.push("/irregularverbs/memorize");
    return;
  }

  render() {
    return (
      <div onClick={this.goToNextPage} className="container youareawesome">
        <div className="icon-poop animated bounceIn">
          <h4 className="animated bounceIn">+10 <span className="spanpoints">Points</span></h4>
        </div>
      </div>
    );
  }
}

export default withRouter(YouAreAwesome);

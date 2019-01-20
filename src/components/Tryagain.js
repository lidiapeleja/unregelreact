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
      <div onClick={this.goToNextPage} className="container tryagain">
        <div className="icon-poop">
          <FontAwesomeIcon icon={faPoop} />
        </div>
      </div>
    );
  }
}

export default withRouter(Tryagain);

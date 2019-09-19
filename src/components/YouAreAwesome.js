import React from "react";
import "./YouAreAwesome.css";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPoop } from "@fortawesome/free-solid-svg-icons";
import {Helmet} from "react-helmet";

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
         <Helmet>
        <title>Correct answer: you just learned a new irregular verb</title>
        <meta name="description" content="learn by playing: practise and memorise the list of german irregular verbs in a fun way" />
    </Helmet>
        <div className="icon-poop animated bounceIn">
          <h4 className="animated bounceIn">+10 <span className="spanpoints">Points</span></h4>
        </div>
      </div>
    );
  }
}

export default withRouter(YouAreAwesome);

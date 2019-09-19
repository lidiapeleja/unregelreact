import React from "react";
import "./Loading.css";
import { withRouter } from "react-router-dom";
import {Helmet} from "react-helmet";

class Loading extends React.Component {
  getInitialState() {
    return { position: 1 };
  }

  constructor(props) {
    super(props);

    setTimeout(() => this.props.history.push("/irregularverbs/memorize"), 2000);
  }

  render() {
    return (
      <div className="loadingcontainer">
         <Helmet>
        <title>Loading Unregel App: learn the german irregular verbs in a fun way</title>
        <meta name="description" content="Loading Unregel App: memorise the list of irregular verbs in German - die unregelmäßige Verben" />
        </Helmet>
        <div className="lds-heart">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="loadingtext">Loading New Game...</div>
      </div>
    );
  }
}

export default withRouter(Loading);

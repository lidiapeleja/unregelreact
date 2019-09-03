import React from "react";
import "./Loading.css";
import { withRouter } from "react-router-dom";

class Loading extends React.Component {
  getInitialState() {
    return { position: 1 };
  }

  constructor(props) {
    super(props);

    setTimeout(() => this.props.history.push("/exercises/memorize"), 2000);
  }

  render() {
    return (
      <div className="loadingcontainer">
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
        <div className="loadingtext">Loading Game...</div>
      </div>
    );
  }
}

export default withRouter(Loading);

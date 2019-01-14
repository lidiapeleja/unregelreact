import React from "react";
import "./Loading.css";
import {withRouter} from 'react-router-dom'

class Loading extends React.Component {

  getInitialState() {
    return {position: 1};
  }

  constructor(props) {
    super(props)

    setTimeout(() => this.props.history.push('/verbs-memory'), 3000)
  }

  render() {
    return (<div className="loadingcontainer">
      <div className="lds-heart">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loadingtext">Loading...</div>
    </div>)
  }
}

export default withRouter(Loading);

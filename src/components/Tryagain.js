import React from "react";
import "./Tryagain.css";
import {withRouter} from 'react-router-dom'

class Tryagain extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (<div className="tryagain">
    <h1>noch mal!</h1>
    </div>)
  }
}

export default withRouter(Tryagain);

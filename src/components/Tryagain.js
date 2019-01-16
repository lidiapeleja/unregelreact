import React from "react";
import "./Tryagain.css";
import {withRouter} from 'react-router-dom'

class Tryagain extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage(target) {
    this.props.history.push('/verbs-memory');
    return;
  };

  render() {
    return (<div onClick={this.goToNextPage} className="container tryagain">
	<h1><span role="img">🙄</span></h1>

</div>
)
  }
}

export default withRouter(Tryagain);

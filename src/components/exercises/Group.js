import React from "react";
import "./Group.css";
import verbsData from '../../data/verbs.json';

const firstVerb = verbsData.verbs[0];

class Group extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/verbs');
    return;
  };


  render() {
    return (<div>
      <h5>{this.props.currentVerb.vowel1} - {this.props.currentVerb.vowel21}{this.props.currentVerb.vowel22} - {this.props.currentVerb.vowel31}{this.props.currentVerb.vowel32}</h5>
    </div>);
  }
};

export default Group;

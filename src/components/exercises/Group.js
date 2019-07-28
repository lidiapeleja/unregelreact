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
      <h5>{firstVerb.vowel1} - {firstVerb.vowel21}{firstVerb.vowel22} - {firstVerb.vowel31}{firstVerb.vowel32}</h5>
    </div>);
  }
};

export default Group;
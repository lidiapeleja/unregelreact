import React from "react";
import "./Group.css";

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
    return (<div className="group">
      <h5>{this.props.currentVerb.vowel1} - <span className="vowelspink">{this.props.currentVerb.vowel21}{this.props.currentVerb.vowel22}</span> - <span className="vowelspink">{this.props.currentVerb.vowel31}{this.props.currentVerb.vowel32}</span></h5>
    </div>);
  }
};

export default Group;

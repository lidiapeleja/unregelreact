import "./Welcome.css";
import React from "react";

class Verbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = resetState();
    console.log("nothing is really going on");
    // This binding is necessary to make `this` work in the callback
    this.addVerb2 = this.addVerb2.bind(this);
  }

  render() {
    return (<div>"Hey there!"
      </div>
    );
  }
}


export default Welcome;

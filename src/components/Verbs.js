import "./Verbs.css";
import React from "react";

const INITIAL_VERBS = ['befehlen'];
const NEW_VERBS = ['befahl', 'befohlen'];

function deepCopy(o) {
  return JSON.parse(JSON.stringify(o));
};

function resetVerbs() {
  return {initialVerbs: deepCopy(INITIAL_VERBS), newVerbs: deepCopy(NEW_VERBS)};
  console.log("reset verbs has been executed");
};

class Verbs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      verbs: resetVerbs(),
      points: 0
    };

    console.log("nothing happened yet");
    // This binding is necessary to make `this` work in the callback
    this.addVerb2 = this.addVerb2.bind(this);
    this.incrementPoint = this.incrementPoint.bind(this);
  }

  addVerb2() {
    this.setState(state => {
      if (state.verbs.newVerbs.length === 0) {
        state.verbs = resetVerbs();
        return state;
      }

      const verb = state.verbs.newVerbs.shift();
      state.verbs.initialVerbs.push(verb);
      console.log("addVerb2 function has been executed");

      state.verbs = {initialVerbs: state.verbs.initialVerbs, newVerbs: state.verbs.newVerbs};
      return state;
    });
  }

  incrementPoint(point) {
    this.setState(state => {
      point: state.point++
    });
  };

  render() {
    return (<div onClick={this.addVerb2} className="container verbs">
      {
        this.state.verbs.initialVerbs.map((verb) => <div>
          <h1>{verb}</h1>
          <Verbs initialVerb={state.verbs.init} addVerb=this.addVerb />
        </div>)
      }
    </div>);
  }
}

export default Verbs;

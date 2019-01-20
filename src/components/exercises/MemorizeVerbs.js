import React from "react";
import HeartPoints from "./HeartPoints";
import Marginpx from "../ui/Marginpx";
import { withRouter } from "react-router-dom";
import verbsData from "../../data/verbs.json";
import "./MemorizeVerbs.css";

class MemorizeVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      untilIdx: 0
    };

    // verbs
    this.nextVerb = this.nextVerb.bind(this);
  }

  nextVerb() {
    this.setState(state => ({
      untilIdx: state.untilIdx + 1
    }));
  }

  render() {
    const { points } = this.props;
    const { untilIdx } = this.state;

    return (
      <div onClick={this.nextVerb} className="container-verbs">
        <HeartPoints points={points} />
        <Marginpx />
        {verbsData.verbs
          .filter((_, idx) => idx <= untilIdx)
          .map(verb => (
            <div>
              <h1>{verb.infinitive}</h1>
            </div>
          ))}
      </div>
    );
  }
}

export default withRouter(MemorizeVerbs);

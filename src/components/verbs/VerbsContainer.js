import "./VerbsContainer.css";
import React from "react";
import HeartPoints from "./HeartPoints";
import Marginpx from "../Marginpx";
import {withRouter} from 'react-router-dom'
import verbsData from '../../data/verbs.json';

const VerbsContainer = props => {
  return (<div onClick={props.addVerb.bind(null, props.history)} className="container-verbs">
  <HeartPoints points={props.points} /><Marginpx/>
    {
      props.verbs.initialVerbs.map((verb) => <div>
        <h1>{verb}</h1>
      </div>)
    }
  </div>);
}

export default withRouter(VerbsContainer);

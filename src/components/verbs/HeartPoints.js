import React from "react";
import Points from "./Points.js";
import Heart from "./Heart.js";

const HeartPoints = props => {
    return (<div>
      <Points points={props.points}/>
      <Heart/>
    </div>)
  };


export default HeartPoints;

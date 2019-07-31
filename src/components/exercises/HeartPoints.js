import React from "react";
import Points from "./Points.js";
import Heart from "./Heart.js";
import "./HeartPoints.css";

const HeartPoints = props => {
    return (<div>
      <div className="wrapperheartpoints">
      <Points points={props.points}/>
      <Heart hearts={props.hearts}/>
      </div>
    </div>)
  };


export default HeartPoints;

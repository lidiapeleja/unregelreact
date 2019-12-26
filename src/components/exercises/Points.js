import React from "react";
import "./Points.css";

const Points = props => {
  return <div className="container-points">
    <div className="points animated bounceIn delay-1s"><span className="spanpoints">Points: </span>
      {props.points}
    </div>
  </div>
};

export default Points;

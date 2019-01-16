import React from "react";
import "./Points.css";

const Points = (props) => {
  return <div className="container-points">
    <div className="points">
      {props.points}
    </div>
  </div>
};

export default Points;

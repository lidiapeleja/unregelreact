import React from "react";
import "./Heart.css";
import Points from "./Points.js";

const Heart = (props) => {
  return <div>
            <div className="container-heart">
              <Points points={props.points}/>
              <span role="img" aria-label="heart heart5">💖</span>
              <span role="img" aria-label="heart heart4">💖</span>
              <span role="img" aria-label="heart heart3">💖</span>
              <span role="img" aria-label="heart heart2">💖</span>
              <span role="img" aria-label="heart heart1">💖</span>
            </div>
          </div>
};

export default Heart;

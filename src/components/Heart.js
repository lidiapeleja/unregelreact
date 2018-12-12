import React from "react";
import "./Heart.css";
import Points from "./Points.js";
import Verbs from "./Verbs.js";


const Heart = () => {
  return <div>
            <div className="conta">
              <Points/>
              <span role="img" aria-label="heart">❤️</span>
              <span role="img" aria-label="heart">❤️</span>
              <span role="img" aria-label="heart">❤️</span>
              <span role="img" aria-label="heart">❤️</span>
              <span role="img" aria-label="heart">❤️</span>
            </div>
            <Verbs/>
          </div>
};

export default Heart;

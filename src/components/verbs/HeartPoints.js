import React from "react";
import Points from "./Points.js";
import Heart from "./Heart.js";

class HeartPoints extends React.Component {

  render() {
    return (<div>
      <Points points={this.props.points}/>
      <Heart/>
    </div>)
  };

}

export default HeartPoints;

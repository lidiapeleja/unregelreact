import React from "react";
import "./Loading.css";


class Loading extends React.Component {

  render() {
    return (<div className="loadingcontainer"><div className="lds-heart"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><div className="loadingtext">Loading...</div>
  </div>)
  }
}

export default Loading;

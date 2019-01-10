import React from "react";
import "./Image.css";
import apple from "./pexels-photo-616837.jpeg";

// const Pink = ({ children }) => <text style={{ Color: 'red' }}>{children}</text>


class Image extends React.Component {

  render() {
    return (<div className="containerimage container" style={{
        backgroundImage: `url(${apple})`
      }}>
      <h5>Der <font color="#FF0266">A</font>ff<font color="#FF0266">e</font> isst einen <font color="#FF0266">A</font>pf<font color="#FF0266">e</font>l</h5>
    </div>);
  }
};
export default Image;

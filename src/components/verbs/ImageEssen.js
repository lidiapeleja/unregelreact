import React from "react";
import "./ImageEssen.css";
import Group from "./Group";
import essen from "./essen.jpeg";

class ImageEssen extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/verbs');
    return;
  };


  render() {
    return (<div onClick={this.goToNextPage} className="containerimage container" style={{
        backgroundImage: `url(${essen})`
      }}>
    <h2>Die Kinder ess<font color="#FF0266">e</font>n einen <font color="#FF0266">A</font>pf<font color="#FF0266">e</font>l</h2>
    <Group/></div>);
  }
};

export default ImageEssen;

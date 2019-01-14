import React from "react";
import "./ImageBleiben.css";
import Group from "./Group";
import bleiben from "./bleiben.jpeg";
import verbsData from '../../data/verbs.json';
const firstVerb = verbsData.verbs[1];


class ImageBleiben extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/verbs');
    return;
  };

  render() {
    return (<div onClick={this.goToNextPage} className="containerbleiben container" style={{
        backgroundImage: `url(${bleiben})`
      }}>
      <h2>Bleibt das T<font color="#FF0266">{firstVerb.vowel2}</font> h<font color="#FF0266">{firstVerb.vowel3}</font>r hier?</h2><Group/>
    </div>);
  }
};
export default ImageBleiben;

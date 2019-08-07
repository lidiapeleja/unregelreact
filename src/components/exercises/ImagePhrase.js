import React from "react";
import "./ImagePhrase.css";
import Group from "./Group";
import HeartPoints from "./HeartPoints";
import verbsData from '../../data/verbs.json';
import {calcVerbImgSrc} from '../../utils/verbs-image';

const firstVerb = verbsData.verbs[0];

class ImageBleiben extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/exercises/memorize');
    return;
  };

  render() {
    return (<div className="whole-container"><HeartPoints points={this.props.points}/><div onClick={this.goToNextPage
} className="containerimage container-fluid" style={{
        backgroundImage: `url(${calcVerbImgSrc(this.props.currentVerb.infinitive)})`
      }}>
      <div className="container-fluid box1">
        <h5>{this.props.currentVerb.infinitive}</h5>
        <h2>{this.props.currentVerb.sentence1}<font color="#FF0266">{this.props.currentVerb.vowel21}</font>{this.props.currentVerb.sentence2}<font color="#FF0266">{this.props.currentVerb.vowel22}</font>
          {this.props.currentVerb.sentence3}<font color="#FF0266">{this.props.currentVerb.vowel31}</font>{this.props.currentVerb.sentence31}<font color="#FF0266">{this.props.currentVerb.vowel32}</font>{this.props.currentVerb.sentence4}{this.props.currentVerb.sentence5}</h2>
      </div >
      <div className="box2">
        <Group currentVerb={this.props.currentVerb}
/>
      </div>
    </div>
  </div>);
  }
};
export default ImageBleiben;

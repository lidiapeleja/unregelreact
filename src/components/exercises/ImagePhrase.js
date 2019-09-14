import React from "react";
import "./ImagePhrase.css";
import Group from "./Group";
import {calcVerbImgSrc} from '../../utils/verbs-image';

// const firstVerb = verbsData.verbs[0];

class ImageBleiben extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/irregularverbs/memorize');
    return;
  };

  render() {
    return (<div className="whole-container">
      <div className="containerimage container-fluid" style={{
        backgroundImage: `url(${calcVerbImgSrc(this.props.currentVerb.infinitive)})`
      }}>
          <div className="box2">
              <h6>{this.props.currentVerb.infinitive}</h6>
              <h2>{this.props.currentVerb.sentence1}<font color="#FF0266">{this.props.currentVerb.vowel21}</font>{this.props.currentVerb.sentence2}<font color="#FF0266">{this.props.currentVerb.vowel22}</font>
                  {this.props.currentVerb.sentence3}<font color="#FF0266">{this.props.currentVerb.vowel31}</font>{this.props.currentVerb.sentence31}<font color="#FF0266">{this.props.currentVerb.vowel32}</font>{this.props.currentVerb.sentence4}{this.props.currentVerb.sentence5}</h2>
              <Group currentVerb={this.props.currentVerb}/>
          </div>
    </div>
    <div className="containerbuttonimg">
              <button type="submit" onClick={this.goToNextPage} className="btn">Ok</button>
          </div>
  </div>);
  }
};
export default ImageBleiben;

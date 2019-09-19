import React from "react";
import "./ImagePhrase.css";
import Group from "./Group";
import {calcVerbImgSrc} from '../../utils/verbs-image';
import {Helmet} from "react-helmet";

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
    return (<div onClick={this.goToNextPage} className="whole-container">
          <Helmet>
        <title>Get a memorise tip in a form of image</title>
        <meta name="description" content="Get a tip in order to recall and memorise the list of german irregular verbs" />
    </Helmet>
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

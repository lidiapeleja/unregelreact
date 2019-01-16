import React from "react";
import "./ImagePhrase.css";
import Group from "./Group";
import HeartPoints from "./HeartPoints";
import verbsData from '../../data/verbs.json';
import {INIT_IDX} from '../../config';
import {calcVerbImgSrc} from '../../utils/verbs-image';

const firstVerb = verbsData.verbs[INIT_IDX];

class ImageBleiben extends React.Component {
  constructor(props) {
    super(props)
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  goToNextPage() {
    this.props.history.push('/verbs-memory');
    return;
  };

  render() {
    return (<div className="containerall"><HeartPoints points={this.props.points}/><div onClick={this.goToNextPage
} className="containerimage container-fluid" style={{
        backgroundImage: `url(${calcVerbImgSrc(firstVerb.infinitive)})`
      }}>
      <div className="container-fluid box1">
        <h5>{firstVerb.infinitive}</h5>
        <h2>{firstVerb.sentence1}<font color="#FF0266">{firstVerb.vowel21}</font>{firstVerb.sentence2}<font color="#FF0266">{firstVerb.vowel22}</font>
          {firstVerb.sentence3}<font color="#FF0266">{firstVerb.vowel31}</font>{firstVerb.sentence4}<font color="#FF0266">{firstVerb.vowel32}</font>{firstVerb.sentence5}</h2>
      </div >
      <div className="box2">
        <Group/>
      </div>
    </div>
  </div>);
  }
};
export default ImageBleiben;

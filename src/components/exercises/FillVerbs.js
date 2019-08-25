import React from "react";
import "./FillVerbs.css";
import HeartPoints from "./HeartPoints";
// import verbsData from "../../data/verbs.json";
import { withRouter } from "react-router-dom";

class FillVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      vowel2: "",
      vowel3: ""
    };

    this.checkVowels = this.checkVowels.bind(this);
  }

  checkVowels(event) {
      event.preventDefault();
    if (this.state.vowel2 !== "" && this.state.vowel3 !== "" ) {
        console.log("you have pressed keyboard");
        if (
            isVowelsCorrect(
                this.state.vowel2,
                this.props.currentVerb.vowel2,
                this.state.vowel3,
                this.props.currentVerb.vowel3
            )
        ) {
            this.props.addPoints(10);
            this.props.fromIndextoPercentage();
            this.props.youAreAwesome(this.props.history);
            this.props.incrementCurrentVerbIdx();
        } else {
            this.props.loseHeart(this.props.history);
            console.log("theoretically, loseHeart() has been executed");
            console.log(this.props.history);
            this.props.goToTryAgain(this.props.history);
        }
    }

    if (this.state.vowel2 !== "" || this.state.vowel3 !== "" ){
        console.log("some of your fiels are empty");
    }
  }

  render() {
    return (
      <form onSubmit={this.checkVowels}>
        <div className="whole-container">
          <HeartPoints points={this.props.points} hearts={this.props.hearts} />
          <div className="container-verbs">
          <h1>{this.props.currentVerb.infinitive}</h1>
          <h1>
            {this.props.currentVerb.pastTense1}
            <input
              type="text"
              value={this.state.vowel2}
              autoCorrect="off"
              autoCapitalize="none"
              onChange={e => this.setState({ vowel2: e.target.value })}
              maxLength="2"
            />
            {this.props.currentVerb.pastTense2}
          </h1>
          <h1>
            {this.props.currentVerb.pastParticiple0}{" "}
            {this.props.currentVerb.pastParticiple1}
            <input
              type="text"
              value={this.state.vowel3}
              autoCorrect="off"
              autoCapitalize="none"
              onChange={e => this.setState({ vowel3: e.target.value })}
              maxLength="2"
            />
            {this.props.currentVerb.pastParticiple2}
          </h1>
          </div>
          <div className="containerbutton container">
              <button type="submit" className="btn">Check answer</button>
              <h6 className="textbutton">Please fill up all the fields</h6>
          </div>
        </div>
      </form>
    );
  }
}

function isVowelsCorrect(vowel2, inputVowel2, vowel3, inputVowel3) {
  return inputVowel2 === vowel2 && inputVowel3 === vowel3;
};

export default withRouter(FillVerbs);

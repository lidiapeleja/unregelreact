import React from "react";
import "./FillVerbs.css";
import HeartPoints from "./HeartPoints";
import verbsData from "../../data/verbs.json";
import { withRouter } from "react-router-dom";

class FillVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
      vowel2: "",
      vowel3: ""
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === "Enter" && this.state.vowel2 != "" && this.state.vowel3 != "" ) {
      console.log("enter has been clicked!");
      if (
        isVowelsCorrect(
          this.state.vowel2,
          this.props.currentVerb.vowel2,
          this.state.vowel3,
          this.props.currentVerb.vowel3
        )
      ) {
        this.props.addPoints(10);
        this.props.goToNextPage(this.props.history);
        this.props.incrementCurrentVerbIdx();
        console.log("TRUE! You are aweseme!");
      } else {
        this.props.goToTryAgain(this.props.history);
        console.log("Wrong vowel! Try again");
      }
    }
  }

  render() {
    return (
      <form onKeyPress={this.handleKeyPress}>
        <HeartPoints points={this.props.points} />
        <div className="verbsfilling">
          <h1>{this.props.currentVerb.infinitive}</h1>
          <h1>
            {this.props.currentVerb.pastTense1}
            <input
              type="text"
              value={this.state.vowel2}
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
              onChange={e => this.setState({ vowel3: e.target.value })}
              maxLength="2"
            />
            {this.props.currentVerb.pastParticiple2}
          </h1>
        </div>
      </form>
    );
  }
}

function isVowelsCorrect(vowel2, inputVowel2, vowel3, inputVowel3) {
  console.log("you have typed " + inputVowel2 + " when Vowel2 is " + vowel2 + ". " + "You have typed " + inputVowel3 + " when Vowel3 is " + vowel3 )
  return inputVowel2 === vowel2 && inputVowel3 === vowel3;
};

export default withRouter(FillVerbs);

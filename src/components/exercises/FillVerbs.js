import React from "react";
import "./FillVerbs.css";
import HeartPoints from "./HeartPoints";
import { withRouter } from "react-router-dom";
import {Helmet} from "react-helmet";


class FillVerbs extends React.Component {
  constructor() {
    super();

    this.state = {
        vowel2: "",
        vowel3: "",
        issentencedisplayed: false
    };

    this.checkVowels = this.checkVowels.bind(this);
      this.addClass = this.addClass.bind(this);

  }

  checkVowels(event, routerHistory) {
      event.preventDefault();
      if (this.state.vowel2 !== "" && this.state.vowel3 !== "" ) {
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
            this.props.incrementCurrentVerbIdx(this.props.history);
        } else {
            this.props.loseHeart(this.props.history);
            this.props.goToTryAgain(this.props.history);
        }
      }

    if (this.state.vowel2 !== "" || this.state.vowel3 !== "" ){
        this.addClass();
    };

      if(this.props.hearts <= 1 ){
          this.props.resetState();
          this.props.history.replace("/loading");
          return;
      }
  }

    addClass() {
      if (this.state.vowel2 !== "" || this.state.vowel3 !== "" ) {
          this.setState(state => ({
              issentencedisplayed : true
          }));
      };
      }



      render() {
    return (
      <form onSubmit={this.checkVowels}>
        <div className="whole-container">
        <Helmet>
        <title>Test your knowledge - Learn the irregular verbs by playing</title>
        <meta name="description" content="learn by playing: practise and memorise the list of german irregular verbs in a fun way" />
    </Helmet>
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
              onChange={e => this.setState({ vowel2: e.target.value.toLowerCase() })}
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
              onChange={e => this.setState({ vowel3: e.target.value.toLowerCase() })}
              maxLength="2"
            />
            {this.props.currentVerb.pastParticiple2}
          </h1>
          </div>
          <div className="containerbutton">
              <button type="submit" onClick = {this.addClass} className="btn">Check answer</button>
              <h6 className={`textbutton nonactive ${this.state.issentencedisplayed ? 'active':'nonactive'}`}
                  >Fill up all the empty fields</h6>
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

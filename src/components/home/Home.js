import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";

// const WORDS = [
//   {
//     classes: "welcomecontainer w3 animation1",
//     text: "Die"
//   },
//   {
//     classes: "welcomecontainer w1 animation2",
//     text: "174"
//   },
//   {
//     classes: "welcomecontainer w6 animation3",
//     text: "UNREGELMÄßIGEN"
//   },
//   {
//     classes: "welcomecontainer w5 animation4",
//     text: "Verben"
//   },
//   {
//     classes: "welcomecontainer w5 animation5",
//     text: "der"
//   },
//   {
//     classes: "welcomecontainer w5 animation6",
//     text: "Deutschen"
//   },
//   {
//     classes: "welcomecontainer w5 animation7",
//     text: "Sprache"
//   }
// ];

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hiddenWords: WORDS,
    //   shownWords: []
    // };

    // this.showWord = this.showWord.bind(this);
  }

  // componentDidMount() {
  //   this.showWord();
  // }

  // showWord() {
  //   if (this.state.hiddenWords.length === 0) {
  //     this.props.history.push("/loading");
  //     return;
  //   }
  //
  //   this.setState(state => {
  //     const word = state.hiddenWords.shift();
  //     state.shownWords.push(word);
  //     return state;
  //   });
  // }

  render() {
    return (
      <div className="containerwelcome">
        <div className="welcomecontainer">
          <div className="w2 animation1">Learn</div>
          <div className="w4 animation1">die</div>
          <div className="w1 animation2">174</div>
          <div className="w6 animation3">irregular</div>
          <div className="w5 animation4">German</div>
          <div className="w5 animation5">Verbs</div>
        </div>
          <div className="containerbuttonstart container">
            <button type="submit" onClick = {this.addClass} className="btn">START PLAYING</button>
          </div>
      </div>
    );
  }
}

export default withRouter(WelcomeContainer);

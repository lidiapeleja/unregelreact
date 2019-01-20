import React from "react";
import "./Home.css";
import { withRouter } from "react-router-dom";

const WORDS = [
  {
    classes: "welcomecontainer w3 animation1",
    text: "Die"
  },
  {
    classes: "welcomecontainer w1 animation2",
    text: "174"
  },
  {
    classes: "welcomecontainer w6 animation3",
    text: "UNREGELMÄßIGEN"
  },
  {
    classes: "welcomecontainer w5 animation4",
    text: "Verben"
  },
  {
    classes: "welcomecontainer w5 animation5",
    text: "der"
  },
  {
    classes: "welcomecontainer w5 animation6",
    text: "Deutschen"
  },
  {
    classes: "welcomecontainer w5 animation7",
    text: "Sprache"
  }
];

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hiddenWords: WORDS,
      shownWords: []
    };

    // This binding is necessary to make `this` work in the callback
    this.showWord = this.showWord.bind(this);
  }

  componentDidMount() {
    this.showWord();
  }

  showWord() {
    if (this.state.hiddenWords.length === 0) {
      this.props.history.push("/loading");
      return;
    }

    this.setState(state => {
      const word = state.hiddenWords.shift();
      state.shownWords.push(word);
      return state;
    });
  }

  render() {
    return (
      <div className="containerwelcome" onClick={this.showWord}>
        <div className="welcomecontainer">
          {this.state.shownWords.map(obj => (
            <div>
              <div className={obj.classes}>{obj.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(WelcomeContainer);

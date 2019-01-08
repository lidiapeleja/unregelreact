import React from "react";
import Welcome from "./Welcome";
import "./WelcomeContainer.css";

const WORDS = [
  {
    classes: 'welcomecontainer w3 animation1',
    text: 'Die'
  }, {
    classes: 'welcomecontainer w1 animation2',
    text: '176'
  }, {
    classes: 'welcomecontainer w6 animation3',
    text: 'UNREGELMÄßIGEN'
  }, {
    classes: 'welcomecontainer w5 animation4',
    text: 'Verben'
  }, {
    classes: 'welcomecontainer w5 animation5',
    text: 'der'
  }, {
    classes: 'welcomecontainer w5 animation6',
    text: 'deutschen'
  }, {
    classes: 'welcomecontainer w5 animation7',
    text: 'Sprache'
  }
]

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
    this.setState(state => {
      if (state.hiddenWords.length === 0) {
        return state;
      }

      const word = state.hiddenWords.shift();
      state.shownWords.push(word);
      return state;
    });
  }

  render() {
    return (<div onClick={this.showWord} className="container welcomecontainer">
      {
        this.state.shownWords.map((obj) => (<div>
          <div className={obj.classes}>{obj.text}</div>
        </div>))
      }
    </div>);
  }
}

export default WelcomeContainer;

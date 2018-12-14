import React from "react";
import Welcome from "./Welcome";
import "./WelcomeContainer.css";

const ANIMATION_INIT = [{classes: 'welcomecontainer w3 animation1', text: 'Die'}]
const ANIMATION_CLOSING = [{
  classes: 'welcomecontainer w3 animation1', text: 'Die'},
  {classes: 'welcomecontainer w1 animation2', text: '176'},
  {classes: 'welcomecontainer w6 animation3', text: 'UNREGELMÄßIGE'},
  {classes: 'welcomecontainer w5 animation4', text: 'verben'},
  {classes: 'welcomecontainer w5 animation5', text: 'der'},
  {classes: 'welcomecontainer w5 animation6', text: 'Deutsche'},
  {classes: 'welcomecontainer w5 animation7', text: 'Sprache'}
]

function deepCopy(o) {
  return JSON.parse(JSON.stringify(o));
};

function resetAnimation() {
  console.log("reset animation has been executed");
  return {animationInit: deepCopy(ANIMATION_INIT), animationClosing: deepCopy(ANIMATION_CLOSING)};
};

class WelcomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: ANIMATION_INIT};

    // This binding is necessary to make `this` work in the callback
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  this.setState(state => {
    const animations = state.animation.animationClosing.shift();
    state.animation.animationInit.push(animations);
    console.log("handleClick function has been executed");

    state.animation = {
    animationInit: state.animation.animationInit,
    animationClosing: state.animation.animationClosing
  };
  return state;
  });
  }

  render(){
    return (<div onClick={this.handleClick} className="container welcomecontainer">
    { this.state.animationInit.map((animation) => <div>
        <div className="welcomecontainer w3 animation1">Die</div>
        <div className="welcomecontainer w1 animation2">176</div>
        <div className="welcomecontainer w6 animation3">UNREGELMÄßIGE</div>
        <div className="welcomecontainer w5 animation4">verben</div>
        <div className="welcomecontainer w5 animation5">der</div>
        <div className="welcomecontainer w5 animation6">Deutsche</div>
        <div className="welcomecontainer w5 animation7">Sprache</div>
      </div>)}
    </div>);

} }


export default WelcomeContainer;

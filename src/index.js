import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter";

const INITIAL_VERBS = ['essen'];
const NEW_VERBS = ['aß', 'gegessen'];
const WORDS_PER_POINT = 3;
const REPETITIONS = 6;

function deepCopy(o) {
return JSON.parse(JSON.stringify(o));
};

function resetVerbs() {
console.log("reset verbs has been executed");
return {initialVerbs: deepCopy(INITIAL_VERBS), newVerbs: deepCopy(NEW_VERBS)};
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        verbs: resetVerbs(),
        points: 0,
        callCount: 0
      };

      // This binding is necessary to make `this` work in the callback
      this.addVerb = this.addVerb.bind(this);
      this.incrementPoint = this.incrementPoint.bind(this);
  }

      addVerb() {
        this.setState(state => {
          state.callCount = state.callCount + 1;
          if (state.callCount >= WORDS_PER_POINT * REPETITIONS) {
            this.props.history.push('/verbs');
            return;
          }

          if (state.verbs.newVerbs.length === 0) {
            state.verbs = resetVerbs();
            this.incrementPoint();
            return state;
          }

          const verb = state.verbs.newVerbs.shift();
          state.verbs.initialVerbs.push(verb);

          state.verbs = {
            initialVerbs: state.verbs.initialVerbs,
            newVerbs: state.verbs.newVerbs
          };
          return state;
        });

      }

      incrementPoint() {
        this.setState(state => ({
          points: this.state.points + 1
        }));
      };


render() {
  return (<div>
    <AppRouter/>
  </div>)
}
}

ReactDOM.render(<App/>, document.querySelector("#root"));

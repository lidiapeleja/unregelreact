import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter";

export const INDEXATION_VERBS = 25;
var key = 0;

class App extends React.Component {
  constructor() {
    super();
}

render() {
  return (<div>
    <AppRouter/>
  </div>)
}
};


ReactDOM.render(<App/>, document.querySelector("#root"));

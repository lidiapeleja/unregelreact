import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";

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

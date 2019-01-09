import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter";
import axios from "axios";
import LogIn from "./components/LogIn";


class App extends React.Component {

  render() {
    return <div>
      <AppRouter/>
    </div>;
  };
}

ReactDOM.render(<App/>, document.querySelector("#root"));

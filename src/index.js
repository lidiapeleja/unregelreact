import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  return <div> <AppRouter /> </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

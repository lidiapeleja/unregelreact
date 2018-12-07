import React from "react";
import ReactDOM from "react-dom";
import SignUp from "./components/SignUp";

const App = () => {
  return <div> <SignUp /> </div>;
};


ReactDOM.render (
  <App />, document.querySelector( "#root")
);

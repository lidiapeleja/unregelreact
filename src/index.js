import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPoop } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faPoop, faHeart)

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

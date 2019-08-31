import "./Navbar.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Navbar = (props) => (<nav className="navbar">
      <div className="navbar-brand logo"><a href="https://unregelapp.com/"><h1 className="logoh1">UnregelApp</h1><h6 className="logoh6">Lern by Playing</h6></a></div>
  <div className="navbar-brand newgame" onClick={props.alertExit}>New Game</div>
          <div className="navbar-brand restart" onClick={props.alertExit}>Restart</div>
</nav>)


export default Navbar;

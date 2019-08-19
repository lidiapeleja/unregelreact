import "./Navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Navbar = (props) => (<nav className="navbar">
      <div className="navbar-brand logo" href="http://unregelapp.com/"><a><h1 className="logoh1">UnregelApp</h1><h6 className="logoh6">Lern by Playing</h6></a></div>
  <div className="navbar-brand newgame"><a href="/exercises/memorize">New game</a></div>
          <div className="navbar-brand restart" onClick={props.alertExit}>Restart</div>
</nav>)


export default Navbar;

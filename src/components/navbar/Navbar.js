import "./Navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Navbar = (props) => (<nav className="navbar">
      <a className="navbar-brand" href="http://unregelapp.com/"><h1>UnregelApp</h1><h6>Lern by Playing</h6></a>
      <ul className="nav navbar-nav">
        <li>
          <a className="gamelink" href="/exercises/memorize">New game</a>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          {/*<FontAwesomeIcon onClick={props.alertExit} className="exitbutton" icon={faTimes}/>*/}
          <div className="exitbutton" onClick={props.alertExit}>Restart Game</div>
        </li>
      </ul>
</nav>)


export default Navbar;

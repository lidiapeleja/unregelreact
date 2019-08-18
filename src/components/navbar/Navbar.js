import "./Navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);


const Navbar = () => (<nav className="navbar navbar-default">
  <div className="container-fluid">
    {/* Brand and toggle get grouped for better mobile display */}
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </button>
      <a className="navbar-brand" href="http://unregelapp.com/"><h1>UnregelApp</h1><h6>Lern by Playing</h6></a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li>
          <a className="gamelink" href="/exercises/memorize">play!</a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <FontAwesomeIcon className="exitbutton" icon={faTimes}/>
        </li>
      </ul>
    </div>{/* /.navbar-collapse */}
  </div>{/* /.container-fluid */}
</nav>)


export default Navbar;

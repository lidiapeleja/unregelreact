import "./Navbar.css";
import React from "react";

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
          <a className="gamelink" href="/verbs-memory/">play!</a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="whatsapp://send?text=Hi, I just discovered a new learning Website for the Irregular German Verbs. It is pretty cool  😃 Check it out! It is for free ➡️ UnregelApp https://unregelreact.herokuapp.com" data-action="share/whatsapp/share">share it on Whatsapp</a>
        </li>
      </ul>
    </div>{/* /.navbar-collapse */}
  </div>{/* /.container-fluid */}
</nav>)


export default Navbar;

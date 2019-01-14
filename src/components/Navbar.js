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
      <a className="navbar-brand" href="/">UnregelApp</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li>
          <a href="/log-in/">log in
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li>
          <a className="gamelink" href="/verbs-memory/">play!</a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/testing/">log out</a>
        </li>
      </ul>
    </div>{/* /.navbar-collapse */}
  </div>{/* /.container-fluid */}
</nav>)

// <li className="active"><Link to="/">Home</Link></li>
// <li className="active"><Link to="/signin/">Player</Link></li>
// <li className="active"><Link to="/verbs/">Verbs</Link></li>

export default Navbar;

import "./LogIn.css";
import React from "react";
import Rememberme from "./Rememberme.js";

class LogIn extends React.Component {
  state = {
    term: ""
  };




  render() {
    return (<form>
      <h2>
        log in
      </h2>
      <div className="divisor1"></div>
      <div className="full-form">
        <div className="form-group form-login">
          <label className="sr-only" for="exampleInputEmail3">Email address</label>
          <input type="email" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} className="form-control" id="exampleInputEmail3" placeholder="email"/>
        </div>
        <div className="form-group form-login">
          <label className="sr-only" for="exampleInputPassword3">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword3" placeholder="password"/>
        </div>
      </div>
      <Rememberme/>
      <div className="divisor2"></div>
      <button type="submit" onClick={this.onButtonClick} className="btnsignin btn btn-outline btn-lg">
        log in
      </button>
      <span/>
      <h6>
        Not registered yet?
      </h6>
      <button>
        <a href="/sign-up" className="btnsignup btn btn-outline btn-sm" role="button">
          sign up
        </a>
      </button>
    </form>);
  }
}

export default LogIn;

import "./SignUp.css";
import React from "react";

class SignUp extends React.Component {
state = { form : ""};

  render () {
    return (
        <div className="container-fluid bg-light fullscreen">
          <div className="row">
          <h2> sign in </h2>
          </div>
            <form className="form-inline">
              <div className="form-group">
                <label className="sr-only" for="exampleInputEmail3">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail3" placeholder="email" />
              </div>
              <div className="form-group">
                <label className="sr-only" for="exampleInputPassword3">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword3" placeholder="password" />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn d-none"> sign in </button>
            </form>
        </div>
        );
      }
    }

export default SignUp;

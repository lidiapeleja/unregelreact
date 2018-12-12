import "./SignIn.css";
import React from "react";

class SignIn extends React.Component {
state = { form : ""};

  render () {
    return (
            <form>
            <h2> sign in </h2>
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
                  <input type="checkbox" /> remember me, please
                </label>
              </div>
              <button type="submit" className="btnsignin btn btn-outline btn-lg"> sign in </button>
              <span />
              <h6> Not registered yet? </h6>
              <button type="submit" className="btnsignup btn btn-outline btn-sm"> sign up
              </button>
            </form>
        );
      }
    }

export default SignIn;

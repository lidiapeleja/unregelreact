import "./SignUp.css";
import React from "react";
import Rememberme from "./Rememberme.js";
import Terms from "./Terms.js";


class SignUp extends React.Component {
state = { form : ""};

  render () {
    return (
            <form>
            <h2> sign up </h2>
                <div className="full-form">
                  <div className="form-group">
                    <label className="sr-only" for="exampleInputEmail3">First Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail3" placeholder="first name" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="exampleInputEmail3">Last Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail3" placeholder="last name" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="exampleInputEmail3">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail3" placeholder="email" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="exampleInputPassword3">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword3" placeholder="password" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" for="exampleInputPassword3">Repeat Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword4" placeholder="repeat password" />
                  </div>
                  <Terms/>
                  <Rememberme/>
                </div>
              <button type="submit" className="btnsignin btn btn-outline btn-lg"> sign up </button>
              <h6> Already registered ? </h6>
              <button>
              <a href="/log-in" className="btnsignup btn btn-outline btn-sm" role="button"> log in
              </a></button>
            </form>
        );
      }
    }

export default SignUp;

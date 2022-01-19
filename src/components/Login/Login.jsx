import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <section>
        <form>
          <label>
            Enter your email:
          <input className="login-form" type="text" name="email" placeholder="Email..." />
          </label>
          <label>
            Enter your password:
          <input className="login-form" type="text" name="password" placeholder="Email..." />
          </label>
          <input className="form--submit" type="submit" value="ADD" />
        </form>
      </section>
    )
  }
}

export default Login;

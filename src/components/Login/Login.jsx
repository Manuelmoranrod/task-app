import React, { Component } from "react";
import { userContext } from "../../context/userContext";


// email: test@invyo.io
// password: test123@
// Automatically redirect the user already logged in to the page of your choice, except the login page.
// Automatically redirect the user not logged in to the login page.

class Login extends Component {
  constructor(props) {
    super(props)
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    console.log("Email: "+this.email.current.value+" Password: "+this.password.current.value);
    if(this.email.current.value === "test@invyo.io" && this.password.current.value === "test123@"){
      //value.login(this.email.current.value)
      console.log("Todo OK")
    }else{
      alert("Email o contraseña incorrectos")
    }
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your email:
          <input className="login-form" type="text" name="email" ref={this.email} placeholder="Email..." />
          </label>
          <label>
            Enter your password:
          <input className="login-form" type="text" name="password" ref={this.password} placeholder="Password" />
          </label>
          <userContext.Consumer>
          {({ user, login }) =>
            <input className="login-form" type="submit" value="Log In" onClick={() => login(this.email.current.value)} />
          }
          </userContext.Consumer>
        </form>
      </section>
    )
  }
}

export default Login;

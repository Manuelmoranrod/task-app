import React, { Component } from "react";
import { userContext } from "../../context/userContext";

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <userContext.Consumer>
          {({user})=> 
          user.email?
            <h3>Hello {user.email}</h3>:""
          }
        </userContext.Consumer>
        <button>
          <Link to="/todo"> Tasks</Link>
        </button>
        <button>
          <Link to="/data"> My Data</Link>
        </button>
        <button >Log Out</button>
      </div>
    )
  }
}

export default Nav;

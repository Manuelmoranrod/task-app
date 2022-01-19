import React, { Component } from "react";

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/todo"> Tasks</Link>
        <Link to="/data"> My Data</Link>
        <button>Log Out</button>
      </div>
    )
  }
}

export default Nav;

import React, { Component } from "react";

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/todo"> Tasks</Link>
        </button>
        <button>
          <Link to="/data"> My Data</Link>
        </button>
        <button>Log Out</button>
      </div>
    )
  }
}

export default Nav;

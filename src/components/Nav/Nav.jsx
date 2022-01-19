import React, { Component } from "react";

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <>
      <Link to="/login"> Log In</Link>
      <Link to="/todo"> Tasks</Link>
      <Link to="/data"> My Data</Link>
      </>
    )
  }
}

export default Nav;

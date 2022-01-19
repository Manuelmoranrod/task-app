import React, { Component } from "react";
import { Link } from 'react-router-dom';



class Home extends Component {
  render() {
    return (
      <div>
        Welcome to Taskery
        <button><Link to='/todo'> My ToDo´s</Link></button>
      </div>
    );
  }
}

export default Home;

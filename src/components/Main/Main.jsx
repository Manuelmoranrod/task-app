import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import Data from '../Data/Data';
import ToDo from '../ToDo/ToDo';
import Error from '../Error/Error';
import Home from '../Home/Home';

class Main extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/data' element={<Data />} />
          <Route path='/todo' element={<ToDo />} />
          <Route component={Error} />
        </Routes>
      </div>
    )
  }
}

export default Main;

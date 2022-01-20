import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import Data from '../Data/Data';
import ToDo from '../ToDo/ToDo';
import Error from '../Error/Error';
import Home from '../Home/Home';
//import { userContext } from "../../context/userContext";

// change component on the Route, now is element

class Main extends Component {
  render() {
    
    return (
      <div>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} exact/>
          <Route path='/data' element={<Data />} />
          <Route path='/todo' element={<ToDo />} />
          <Route component={Error} />
        </Routes>
        
      </div>
    )
  }
}

export default Main;

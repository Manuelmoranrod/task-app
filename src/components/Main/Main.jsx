import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Login from '../Login/Login';
import Data from '../Data/Data';
import ToDo from '../ToDo/ToDo';
import Error from '../Error/Error';
import Home from '../Home/Home';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/data' component={Data} />
          <Route path='/login' component={Login} />
          <Route path='/todo' component={ToDo} />
          <Route component={Error} />
        </Switch>
        
      </main>
    )
  }
}

export default Main;

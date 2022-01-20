import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';
import { userContext } from './context/userContext';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        auth: false,
        email: "",
      }
    }
  }

  login = (email) => {
    this.setState({
      user: {
        auth: true,
        email: email,
      }
    })
  }

  logout = () => {
    this.setState({
      user: {
        auth: false,
        email: '',
      }
    });
  }


  render() {
    const value = {
      auth: false,
      user: this.state.user,
      login: this.login,
      logout: this.logout
    }

    return (
      <div className="app">
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Main />
          </userContext.Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import { Button } from 'antd';
import './common.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button type="primary">Antd Button</Button>
        </div>
      </div>
    );
  }
}

export default App;

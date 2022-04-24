import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login'
import Home from './home';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="login" element = {<Login/>}/>
            <Route path="home" element = {<Home/>}/>
        </Routes>
        </BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>
      </div>
    );
  }
}

export default App;

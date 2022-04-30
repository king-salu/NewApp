import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './login'
import Home from './home';
import MyLibrary from './myLibrary';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="home" element = {<Home/>}/>
            <Route path="myLibrary" element = {<MyLibrary/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

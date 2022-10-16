import React from 'react';
import Header from './components/Header.jsx';
// import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx'
import './App.css';
import Idfind from './components/Idfind.jsx';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
import React from 'react';
import Header from './components/Header.jsx';
// import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx'
import './App.css';
import Idfind from './components/Idfind.jsx';
import { Route,Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
import Pwdfind from './components/Pwdfind.jsx';
import Communityform from './components/Communityform.jsx';
// import firebase from './firebase.js';
const App = () => {
//   useEffect(()=> { 
//     console.log(firebase);
//   });

  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<Login />}/>
      <Route path="/Login/Register" element={<Register />}/>
      <Route path="/Login/Idfine" element={<Idfind />} />
      <Route path="/Login/Pwdfind" element={<Pwdfind />} />
      <Route path="/Community" element={<Communityform />} />
      </Routes>
    </div>
  );
};

export default App;
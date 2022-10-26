import React,{useEffect} from 'react';
import Header from './components/Header.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx'
import './App.css';
import Idfind from './components/Idfind.jsx';
import { Route,Routes } from 'react-router-dom';
import Main from './components/Main.jsx';
import Pwdfind from './components/Pwdfind.jsx';
import Communityform from './components/Communityform.jsx';
import { firestore } from "./firebase";
import Localfestival from './components/Localfestival';
import TripPlan from './components/TripPlan.jsx';
import TripPlanYes1 from './components/TripPlanYes1.jsx';
import TripPlanNo1 from './components/TripPlanNo1.jsx';
import CommunityWrite from './components/CommunityWrite';
const App = () => {
  useEffect(()=> { 
    console.log(firestore);
    console.log("Hello");
  });

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
      <Route path="/Community/Write" element={<CommunityWrite />}/>
      <Route path="/localfestival" element={<Localfestival />} />
      <Route path='/TripPlan' element={<TripPlan />}/>
      <Route path='/TripPlan/Yes1' element={<TripPlanYes1 />}/>
      <Route path='/TripPlan/No1' element={<TripPlanNo1 />}/>
      </Routes>
    </div>
  );
};

export default App;
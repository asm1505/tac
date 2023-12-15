import React from 'react';
import './App.css';
import TrainerDashboard from './TrainerDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './TVProfile';
import athletelist from "./ListofAthletes.json";
import TrainerNavbar from './TDNavbar';

const TAC = () => {
  return (
    <Router>
      <TrainerNavbar/>
      <Routes>
        <Route path ="/" element={<TrainerDashboard jsondata={athletelist}/>} />
        {athletelist.map((athlete) => (
          <Route path={"/" + athlete.fullname} element={<Profile jsondata={athletelist}/>}/>
        ))}
      </Routes>
    </Router>
  );
}

export default TAC;
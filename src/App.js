import './App.css';
import SigninNav from './components/SigninNav';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignupNav from './components/SignupNav';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signin' element={<SigninNav/>}/>
        <Route path='/signup' element={<SignupNav/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>  

    </Router>
    </>
  );
}

export default App;
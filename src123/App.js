import './App.css';
import Signin from './components/Signin';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [img, setimg] = useState('')
  const [letter, setletter] = useState('')
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard img ={img} letter={letter}/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>  

    </Router>
    </>
  );
}

export default App;

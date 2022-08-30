import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Index from './components/Index';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <>
      {/* <Index/> */}
      {/* <Signup/>
      <Signin/> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;

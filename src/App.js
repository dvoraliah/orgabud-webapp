import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'


import { Routes, Route } from "react-router-dom";
import Register from "./Screens/Register/Register";
import Home from "./Screens/Home/Home";
import Header from "./Screens/Header/Header"
import Dashboard from './Screens/Dashboard/Dashboard';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;

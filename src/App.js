import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from "./Screens/Register/Register";
import Home from "./Screens/Home/Home";
import Header from "./Screens/Header/Header"
import Dashboard from './Screens/Dashboard/Dashboard';
import Profil from "./Screens/Profil/Profil";


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;

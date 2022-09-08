import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import ConnexionForm from './Component/ConnexionForm'
import LogoSlogan from './Component/LogoSlogan'
import CarouselAutoPlay from "./Component/CarouselAutoPlay";
import {
BrowserRouter,
Routes, //replaces "Switch" used till v5
Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <LogoSlogan />

          <div className="connexion-contenair">
            <ConnexionForm />
          </div>
          {/* */}
        </header>
        <body>
          <div className="carousel-contenair">
            <CarouselAutoPlay />
          </div>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;

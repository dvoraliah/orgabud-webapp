import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import ConnexionForm from './Component/ConnexionForm'
import LogoSlogan from './Component/LogoSlogan'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <LogoSlogan />

        <div className="connexion-contenair">
          <ConnexionForm />
        </div>
      </header>
    </div>
  );
}

export default App;

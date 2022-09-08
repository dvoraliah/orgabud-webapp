import logo from './asset/images/logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import ConnexionForm from './Component/ConnexionForm'
// import { TextInput, Button, Group, Box } from "@mantine/core";


function App() {



  // const onClickedSignUp = () => {
  //   alert("SignUp");
  // };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <div className="logo-contenair">
          <div className="slogan">S'organiser, économiser</div>
          <div className="logoName">Orgabud</div>
        </div>

        <div className="connexion-contenair">
          <ConnexionForm />
          {/* <div className="inscription-contenair">
            <Button className="sign-up" type="submit">
              S'incrire
            </Button>
          </div> */}
          {/*           
          <div className="inscription-contenair">
            <CustomButton
              name="S'incrire"
              class="sign-up"
              onPress={onClickedSignUp}
            />
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;

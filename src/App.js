import logo from './asset/images/logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CustomButton from "./Component/CustomButton.js"
import CustomInput from "./Component/CustomInput"
import React, {useState} from 'react'

function App() {
  const [email, setEmail] = useState('');

  const onClickedConnect = () => {
    alert("Connect " + email)
  };

  const onClickedSignUp = () => {
    alert("SignUp");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <div className="logo-contenair">
          <div className="slogan">S'organiser, économiser</div>
          <div className="logoName">Orgabud</div>
        </div>
        
        <div className="connexion-contenair">
          <CustomInput label="Email" class="connexion-input" value={email} setValue={setEmail}/>
          <CustomInput label="Mot de passe" class="connexion-input" />
          <CustomButton
            name="Se connecter"
            class="connexion"
            onPress={onClickedConnect}
          />
          <div className="inscription-contenair">
            <CustomButton
              name="S'incrire"
              class="sign-up"
              onPress={onClickedSignUp}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

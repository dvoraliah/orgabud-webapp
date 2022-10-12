import React from 'react'
import ConnexionForm from "../../Component/ConnexionForm";
import LogoSlogan from "../../Component/LogoSlogan";
import { useNavigate } from "react-router-dom";


export default function Header() {
  
  let navigate = useNavigate(); 

  const onSignUpClicked = () => {
    let path = "/register";
    navigate(path);
  };

  const onClickedConnect = (props) => {
    console.log(props);
  };

    return (
      <header className="App-header">
        <div className="header-left">
          <LogoSlogan slogan={"S'organiser, économiser"} sitename={"Orgabud"} />
        </div>
        <div className="header-right">
          {/* <div className="connexion-contenair"> */}
          <ConnexionForm
            onSignUpClicked={onSignUpClicked}
            onClickedConnect={onClickedConnect}
          />
          {/* </div> */}
        </div>
      </header>
    );
}

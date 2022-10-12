import React from 'react'
import ConnexionForm from "../../Component/ConnexionForm";
import LogoSlogan from "../../Component/LogoSlogan";
import { useNavigate } from "react-router-dom";
import {OrgabudLOGIN} from "../../Services/OrgabudAPI"


export default function Header() {
  
  let navigate = useNavigate(); 

  const onSignUpClicked = () => {
    let path = "/register";
    navigate(path);
  };

  const onClickedConnect = (props) => {
    OrgabudLOGIN(props.email, props.password);
  };

    return (
      <header className="App-header">
        <div className="header-left">
          <LogoSlogan slogan={"S'organiser, économiser"} sitename={"Orgabud"} />
        </div>
        <div className="header-right">
          <ConnexionForm
            onSignUpClicked={onSignUpClicked}
            onClickedConnect={onClickedConnect}
          />
        </div>
      </header>
    );
}

import React from 'react'
import ConnexionForm from "../../Component/ConnexionForm";
import ConnectedForm from "../../Component/ConnectedForm"
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
    const whenLogged = ()=> {
      let path = "/dashboard";
      navigate(path)
    }
    OrgabudLOGIN(props.email, props.password, whenLogged);
  };

  const onDisconnectClicked = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("pseudo");
    let path = "/";
    navigate(path);
  };

    return (
      <header className="App-header">
        <div className="header-left">
          <LogoSlogan slogan={"S'organiser, économiser"} sitename={"Orgabud"} />
        </div>
        <div className="header-right">
          {sessionStorage.getItem("token") ? (
            <ConnectedForm onDisconnectClicked={onDisconnectClicked} pseudo={sessionStorage.getItem("pseudo")}/>
          ) : (
            <ConnexionForm
              onSignUpClicked={onSignUpClicked}
              onClickedConnect={onClickedConnect}
            />
          )}

        </div>
      </header>
    );
}

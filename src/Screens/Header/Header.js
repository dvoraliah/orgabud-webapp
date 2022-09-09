import React from 'react'
import ConnexionForm from "../../Component/ConnexionForm";
import LogoSlogan from "../../Component/LogoSlogan";

export default function Header() {
    
    return (
      <header className="App-header">
        <div className="header-left">
            <LogoSlogan />
        </div>
        <div className="header-right">
            {/* <div className="connexion-contenair"> */}
                <ConnexionForm />
            {/* </div> */}
        </div>
      </header>
    );
}

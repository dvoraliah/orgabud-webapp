import React from 'react'
import logo from "../asset/images/logo.png";
import { useNavigate } from "react-router-dom";


export default function LogoSlogan() {

    let navigate = useNavigate();
    const returnToHome = () => {
        let path = "/";
        navigate(path);
    }

    return(
        <div className="logoslogan">
            <div className="container-logo">
                <img src={logo} className="logo" alt="logo" onClick={returnToHome} />
            </div>
            <div className="slogan-container" onClick={returnToHome}>
                <div className="slogan">S'organiser, économiser</div>
                <div className="logoName">Orgabud</div>
            </div>
        </div>
    )
}
import React from 'react'
import logo from "../asset/images/logo.png";
import { useNavigate } from "react-router-dom";


export default function LogoSlogan(props) {

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
                <div className="slogan">{props.slogan}</div>
                <div className="logoName">{props.sitename}</div>
            </div>
        </div>
    )
}
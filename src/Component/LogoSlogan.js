import React from 'react'
import logo from "../asset/images/logo.png";

export default function LogoSlogan() {

    return(
        <>
            <img src={logo} className="logo" alt="logo" />
            <div className="logo-contenair">
                <div className="slogan">S'organiser, économiser</div>
                <div className="logoName">Orgabud</div>
            </div>
        </>
    )
}
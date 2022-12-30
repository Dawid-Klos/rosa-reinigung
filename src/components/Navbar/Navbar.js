import React from "react";

import Logo from "../../images/logo.svg";
import "../../styles/navbar.scss";

const Navbar = () => {
    return(
        <header className="navbar">
            <img className="navbar__logo" src={Logo} alt="Rosa Reinigung company logo" />
            <nav className="nav">
                <a className="nav__link" href="#home">Home</a>
                <a className="nav__link" href="#reviews">Bewertungen</a>
                <a className="nav__link" href="#services">Dienstleistungen</a>
                <a className="nav__link" href="#gallery">Fotogalerie</a>
                <a className="nav__link" href="#contact">Kontakt</a>
                <button className="nav__link--button" type="button">
                    <a href="#form">Terminvereinbarung</a>
                </button>
            </nav>
        </header>
    )
}

export default Navbar;
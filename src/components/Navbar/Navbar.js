import React from "react";

import Logo from "../../images/logo.svg";
import "../../styles/Navbar/navbar.scss";

const Navbar = () => {
    return(
        <header className="navbar" id="home">
            <img className="navbar__logo" src={Logo} alt="Rosa Reinigung company logo" />
            <nav className="navbar__nav">
                <a href="#home">Home</a>
                <a href="#services">Dienstleistungen</a>
                <a href="#reviews">Bewertungen</a>
                <a href="#gallery">Fotogalerie</a>
                <a href="#contact">Kontakt</a>
                <button type="button">
                    <a href="#form">Terminvereinbarung</a>
                </button>
            </nav>
        </header>
    )
}

export default Navbar;
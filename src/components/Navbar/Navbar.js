import React, { useEffect, useState } from "react";

import Logo from "../../images/logo.svg";
import "../../styles/navbar.scss";

import HamburgerMenu from "./HamburgerMenu";
import { debounce } from "../../helpers/debounce";

import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll, isMobile]);

  return (
    <header className={`navbar ${!visible && "navbar--hidden"}`}>
      <img className="navbar__logo" src={Logo} alt="Rosa Reinigung company logo" />
      {isMobile ? (
        <HamburgerMenu />
      ) : (
        <nav className="nav">
          <a className="nav__link" href="#home">
            Home
          </a>
          <a className="nav__link" href="#reviews">
            Bewertungen
          </a>
          <a className="nav__link" href="#services">
            Dienstleistungen
          </a>
          <a className="nav__link" href="#gallery">
            Fotogalerie
          </a>
          <a className="nav__link" href="#contact">
            Kontakt
          </a>
          <button className="nav__link--button" type="button">
            <a href="#form">Terminvereinbarung</a>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

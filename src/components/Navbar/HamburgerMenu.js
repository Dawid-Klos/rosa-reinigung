import React, { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={`hamburger hamburger--spin ${isOpen && "is-active"}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </button>
      <nav className={`mobile-nav ${!isOpen && "is-active"}`}>
        <a className="mobile-nav__link" href="#home" onClick={() => setIsOpen(!isOpen)}>
          Home
        </a>
        <a className="mobile-nav__link" href="#reviews" onClick={() => setIsOpen(!isOpen)}>
          Bewertungen
        </a>
        <a className="mobile-nav__link" href="#services" onClick={() => setIsOpen(!isOpen)}>
          Dienstleistungen
        </a>
        <a className="mobile-nav__link" href="#gallery" onClick={() => setIsOpen(!isOpen)}>
          Fotogalerie
        </a>
        <a className="mobile-nav__link" href="#contact" onClick={() => setIsOpen(!isOpen)}>
          Kontakt
        </a>
        <button className="mobile-nav__link--button" type="button" onClick={() => setIsOpen(!isOpen)}>
          <a href="#form">Terminvereinbarung</a>
        </button>
      </nav>
    </>
  );
}

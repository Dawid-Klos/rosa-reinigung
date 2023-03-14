import React from "react";

import Logo from "../../images/logo.svg";

import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__img" src={Logo} alt="Rosa Reinigung Firmenlogo" />
      <p className="footer__copyrights">
        Urheberrechte © 2023 <strong>Rosa Reinigung</strong>. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
};

export default Footer;

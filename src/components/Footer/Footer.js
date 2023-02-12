import React from "react";

import Logo from "../../images/logo.svg";

import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__img" src={Logo} alt="Rosa reinigungg company logo" />
      <p className="footer__copyrights">Copyright © 2022 Rosa Reinigung. Alle Rechte vorbehalten.</p>
    </footer>
  );
};

export default Footer;

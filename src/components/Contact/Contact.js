import React from "react";

import "../../styles/contact.scss";

import Image from "../../images/img-footer.svg";
import CheckIcon from "../../images/icons/icon-check-mark.svg";
import PhoneIcon from "../../images/icons/icon-footer-phone.svg";
import EmailIcon from "../../images/icons/icon-footer-mail.svg";
import InstagramIcon from "../../images/icons/icon-footer-instagram.svg";
import FacebookIcon from "../../images/icons/icon-footer-facebook.svg";

const contactDetails = [
  {
    id: 0,
    icon: PhoneIcon,
    label: "+49 176 30374360",
    href: "tel:+4917630374360",
  },
  {
    id: 1,
    icon: EmailIcon,
    label: "rosa.reinigungg@gmail.com",
    href: "mailto:rosa.reinigungg@gmail.com",
  },
  {
    id: 2,
    icon: InstagramIcon,
    label: "rosareinigung.hamburg",
    href: "https://www.instagram.com/rosareinigung.hamburg/",
  },
  {
    id: 3,
    icon: FacebookIcon,
    label: "Rosa Reinigung Hamburg",
    href: "https://www.facebook.com/people/Rosa-Reinigung-Hamburg/100068379995268/",
  },
];

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-details">
        <h2 className="contact-details__heading">Kontatkieren Sie Uns.</h2>
        <address className="contact-details__wrapper">
          {contactDetails.map((detail) => (
            <a className="contact-details__contact" href={detail.href} key={detail.id}>
              <img src={detail.icon} alt="" loading="lazy" />
              <p>{detail.label}</p>
            </a>
          ))}
        </address>
      </div>

      <div className="contact-cooperation">
        <h2 className="contact-cooperation__heading">Kooperation.</h2>
        <p className="contact-cooperation__text">
          Wenn Sie Ihre Zielgruppe über mich erreichen möchten – ich bin offen für eine Zusammenarbeit Mögliche Formen
          Zusammenarbeit:
        </p>
        <ul className="contact-cooperation__points">
          <li className="contact-cooperation__point">
            <img src={CheckIcon} alt="Pink check mark" />
            <p>Ein gesponserter Beitrag oder eine Reihe von Beiträgen Einem Facebook – oder Instagram-Post</p>
          </li>
          <li className="contact-cooperation__point">
            <img src={CheckIcon} alt="Pink check mark" />
            <p>Produkt Bewertungen und Tests die die in einem Wettbewerb gipfeln</p>
          </li>
        </ul>
      </div>

      <div className="contact__image-wrapper">
        <img className="contact__img" src={Image} alt="A woman falling through mess and cable on the floor" />
      </div>
    </section>
  );
};

export default Contact;

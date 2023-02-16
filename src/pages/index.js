import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import Booking from "../components/Booking/Booking";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import HeroImage from "../images/img-line-hero.webp";
import HeroImageMobile from "../images/img-line-hero-mobile.webp";
import { Seo } from "../components/Seo";

import "../styles/index.scss";

import { useMediaQuery } from "react-responsive";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Reviews />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <>
      <Seo />
      {isMobile ? (
        <link rel="preload" fetchpriority="high" as="image" href={HeroImageMobile} type="image/webp"></link>
      ) : (
        <link rel="preload" fetchpriority="high" as="image" href={HeroImage} type="image/webp"></link>
      )}
    </>
  );
};

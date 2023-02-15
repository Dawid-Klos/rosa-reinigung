import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import Booking from "../components/Booking/Booking";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import "../styles/index.scss";

const IndexPage = () => {
  return (
    <>
      <a id="home"></a>
      <Navbar />
      <Hero />
      <a id="reviews"></a>
      <Reviews />
      <a id="services"></a>
      <Services />
      <a id="gallery"></a>
      <Gallery />
      <a id="form"></a>
      <Booking />
      <a id="contact"></a>
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Rosa Reinigung</title>
    // Preload the LCP image with a high fetchpriority so it starts loading with the stylesheet.
    <link rel="preload" fetchpriority="high" as="image" href="../images/img-line-hero.webp" type="image/webp"></link>
    <link
      rel="preload"
      fetchpriority="high"
      as="image"
      href="../images/img-line-hero-mobile.webp"
      type="image/webp"
    ></link>
  </>
);

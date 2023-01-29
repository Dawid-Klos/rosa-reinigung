import * as React from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import Booking from "../components/Booking/Booking";

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
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Rosa Reinigung</title>;

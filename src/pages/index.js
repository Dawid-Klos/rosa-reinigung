import * as React from "react"

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import "../styles/index.scss";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";

const IndexPage = () => {
  return (
    <>
      <a id="home"></a>
      <Navbar/>
      <Hero />
      <a id="reviews"></a>
      <Reviews />
      <a id="services"></a>
      <Services />
      <a id="gallery"></a>
      <Gallery />
    </>
    )
}

export default IndexPage

export const Head = () => <title>Rosa Reinigung</title>

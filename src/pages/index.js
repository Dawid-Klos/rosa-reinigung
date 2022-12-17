import * as React from "react"

import "../styles/index.scss";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";

const IndexPage = () => {
  return (
    <>
      <a id="home"></a>
      <Navbar/>
      <Hero />
      <Reviews />
      <Services />
    </>
    )
}

export default IndexPage

export const Head = () => <title>Rosa Reinigung</title>

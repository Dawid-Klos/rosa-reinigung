import * as React from "react"

import "../styles/index.scss";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Reviews/Reviews";

const IndexPage = () => {
  return (
    <>
      <a id="home"></a>
      <Navbar/>
      <Hero />
      <Reviews />
    </>
    )
}

export default IndexPage

export const Head = () => <title>Rosa Reinigung</title>

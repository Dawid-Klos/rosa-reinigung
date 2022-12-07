import * as React from "react"

import "../styles/index.scss";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Hero />
    </>
    )
}

export default IndexPage

export const Head = () => <title>Rosa Reinigung</title>

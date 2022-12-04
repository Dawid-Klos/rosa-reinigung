import * as React from "react"

import "../styles/index.scss";
import Navbar from "../components/Navbar/Navbar";

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <h1>Welcome to Rosa Reinigung</h1>
      <p>This is my first website with Gatsby on the board! Awesome.</p>
    </>
    )
}

export default IndexPage

export const Head = () => <title>Rosa Reinigung</title>

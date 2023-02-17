import * as React from "react";
import { Link } from "gatsby";

import { Seo } from "../components/Seo";

const pageStyles = {
  color: "#232129",
  padding: "1rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "100vh",
};
const headingStyles = {
  maxWidth: 320,
  textAlign: "center",
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Rosa Reinigung - Datenschutzrichtlinie</h1>
      <br />
      <Link to="/">Zur Startseite gehen</Link>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => {
  return <Seo title="Rosa Reinigung - Datenschutzrichtlinie" />;
};

import * as React from "react";
import { Link } from "gatsby";

import NotFoundImg from "../images/404.svg";

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
const imageStyles = {
  maxWidth: "45vh",
};
const headingStyles = {
  maxWidth: 320,
  textAlign: "center",
};

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.2rem",
  color: "#000000a8",
  textAlign: "center",
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <img style={imageStyles} src={NotFoundImg} alt="404" />
      <h1 style={headingStyles}>Seite nicht gefunden</h1>
      <p style={paragraphStyles}>
        Tut uns leid 😔, wir konnten nicht finden, wonach Sie gesucht haben.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Zur Startseite gehen</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Rosa-Reinigung - Seite nicht gefunden</title>;

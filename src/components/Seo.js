import React from "react";
import { useSiteMetadata } from "../helpers/useSiteMetadata";

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, charSet } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    charset: charSet,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta charSet={seo.charset} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content="https://rosareinigung.de" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="rosareinigung.de" />
      <meta property="twitter:url" content="https://rosareinigung.de" />
      <meta name="twitter:title" content="Rosa Reinigung - Professionelle Reinigungsdienste" />
      <meta
        name="twitter:description"
        content="Mit Hilfe von Rosa Reinigung können Sie Ihre Zeit für die wöchentliche Reinigung und die saisonale Fensterreinigung sparen und Ihren Umzug völlig stressfrei überstehen. Wir organisieren jeden Raum in Ihrem Haus, vom Dachboden bis zum Keller, damit Sauberkeit Ihr Dauergast ist."
      />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </>
  );
};

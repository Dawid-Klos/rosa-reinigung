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
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      {children}
    </>
  );
};

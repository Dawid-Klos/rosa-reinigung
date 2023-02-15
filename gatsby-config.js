/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rosa Reinigung`,
    description: `Mit Hilfe von Rosa Reinigung können Sie Ihre Zeit für die wöchentliche Reinigung und die saisonale Fensterreinigung sparen und Ihren Umzug völlig stressfrei überstehen. Wir organisieren jeden Raum in Ihrem Haus, vom Dachboden bis zum Keller, damit Sauberkeit Ihr Dauergast ist.`,
    image: `/rosareinigung.png`,
    siteUrl: `https://www.rosareinigung.de`,
    charset: `utf-8`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

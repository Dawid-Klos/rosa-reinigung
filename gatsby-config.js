/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rosa Reinigung`,
    description: `Mit Hilfe von Rosa Reinigung können Sie Ihre Zeit für die wöchentliche Reinigung und die saisonale Fensterreinigung sparen und Ihren Umzug völlig stressfrei überstehen. Wir organisieren jeden Raum in Ihrem Haus, vom Dachboden bis zum Keller, damit Sauberkeit Ihr Dauergast ist.`,
    image: `/rosareinigung.png`,
    siteUrl: `https://rosareinigungmain.gatsbyjs.io`,
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Rosa Reinigung",
        short_name: "Rosa Reinigung",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

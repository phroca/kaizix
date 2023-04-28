/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kaizix`,
    description: `Agence de développement web & création digitale`,
    siteUrl: `https://www.kaizix.fr`,
    image: `/kaizix-logo-solo.png`,
  },
  plugins: ["gatsby-plugin-styled-components", {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [
        "G-LQHE56D92C"
      ]
    }
    }
    , "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/kaizix-logo-solo.png',
    },
  }]
};
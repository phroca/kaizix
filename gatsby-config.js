/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Kaizix`,
    siteUrl: `https://www.kaizix.fr`
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
  }]
};
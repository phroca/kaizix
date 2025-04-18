/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `KAIZIX - Agence de développement web & création digitale`,
    description: `Agence de développement en création de sites web et applications mobiles design, performants & personnalisées pour booster votre activité et vous démarquer.`,
    siteUrl: `https://kaizix.fr`,
    image: `/kaizix-logo-solo.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
          require(`autoprefixer`)
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-LQHE56D92C"
        ]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
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
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: 'https://kaizix.fr',
        sitemap: 'https://kaizix.fr/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ]
};
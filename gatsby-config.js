const {
  name,
  siteTitle,
  siteDescription,
  siteKeyword,
  themeColor,
  backgroundColor,
  siteUrl,
  siteLogo
} = require('./site-config');
module.exports = {
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "<your-tracking-id-here>",
          head: true
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteTitle,
          short_name: name,
          start_url: "/",
          background_color: backgroundColor,
          theme_color: themeColor,
          display: "minimal-ui",
          icon: siteLogo,
          icons: [
            {
              src: "/images/mahipat48.jpg",
              sizes: `48x48`,
              type: `image/jpg`
            },
            {
              src: "/images/mahipat192.jpg",
              sizes: `192x192`,
              type: `image/jpg`
            },
            {
              src: "/images/mahipat512.jpg",
              sizes: `512x512`,
              type: `image/jpg`
            },
          ]
        },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: ["body","html","fa", "fa-twitter", "fa-github", "fa-linkedin"]
      }
    },
    'gatsby-plugin-offline',
    ],
    siteMetadata: {
      title: siteTitle,
      description: siteDescription,
      keywords: siteKeyword,
      url: siteUrl
    }
  };
  
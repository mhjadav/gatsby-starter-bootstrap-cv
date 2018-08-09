
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
    ],
    siteMetadata: {
      title: "Mahipat Jadav | Full stack developer | Javascript, ReactJs | India", // Site title.,
      description: "I am Mahipat Jadav, Full stack developer from india, If you are looking for javscript expert i can help you, i have experience in all new age javascript technologies like Typescript/ES6, React JS, Angular, NodeJS, Graph Ql, Material UI/Bootstrap etc.", // Website description used for RSS feeds/meta description tag.,
      keywords: "mahipat Jadav, full stack developer, mahipat, javascript, react js, Angular, node js, graphql, jquery, lodash, javascript expert, Typescript, ES6, software engineer, web developer, front end developer, bootstrap, material design.",
      url: "https://mhjadav.github.io/gatsby-starter-bootstrap-cv" // Domain of your website without pathPrefix.
    }
  };
  
# gatsby-starter-bootstrap-cv 
[![deploys by netlify](https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg)](https://www.netlify.com)

This is a basic card layout bootstrap template build with ❤️ using [Gatsby V2](https://www.gatsbyjs.org/) .  

## Demo
See it in action [here](https://elegant-hawking-bbad05.netlify.com/).

## Lighthouse scores

![Lighthouse scores](https://lighthouse.now.sh/?perf=99&pwa=100&a11y=79&bp=100&seo=100)

## Installation
```
Installation
gatsby new gatsby-site https://github.com/mhjadav/gatsby-starter-bootstrap-cv
```
```
Edit site-config.js

Run -
`gatsby develop`

```

## Features
- Designed as a minimalistic website
- A minimalistic grid using bootstrap
- Font icons using `font-awesome`
- Google Analytics using `gatsby-plugin-google-analytics`
- Prerendered Open Graph tags for rich sharing
- Site config to add data
- Make your site fast
- Offline support
- Web App Manifest support
- Optimized for SEO (99/100) By [Yellow Labs Tool](https://yellowlab.tools/result/f3uqiylhq5)

## Customization
- Configure site meta data and add your GA tracking ID in `gatsby-config.js`
- Add your details at data/site-config.js
```js
module.exports = {
    siteTitle: "Mahipat Jadav | Full stack developer | Javascript, ReactJs | India", // Site title.
    siteLogo: "http://res.cloudinary.com/vierbit/image/upload/w_250,h_250/v1533837680/mahipat.jpg", // Logo used for SEO and manifest.
    siteUrl: "https://elegant-hawking-bbad05.netlify.com/", // Domain of your website without pathPrefix.
    siteKeyword:"mahipat Jadav, full stack developer, mahipat, javascript, react js, Angular, node js, graphql, jquery, lodash, javascript expert, Typescript, ES6, software engineer, web developer, front end developer, bootstrap, material design.",
    siteDescription: "I am Mahipat Jadav, Full stack developer from india, If you are looking for javscript expert i can help you, i have experience in all new age javascript technologies like Typescript/ES6, React JS, Angular, NodeJS, Graph Ql, Material UI/Bootstrap etc.", // Website description used for RSS feeds/meta description tag.
    googleAnalyticsID: "", // GA tracking ID.
    userName: "Mahipat Jadav", // Username to display in the author segment.
    userTwitter: "mhjadav", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Ahmedabad, Gujarat, India", // User location to display in the author segment.
    userDescription: "Full Stack Developer. - Javascript, Typescript, ReactJS, NodeJS, Bootstrap, GraphQl.",// User description to display in the author segment.
    userPhone:"+91-9898226919",
    userEmail:"mj@mojaave.com",
    skills:[
        {
            name:"Javascript",
            rating: "8"
        },
        {
            name:"HTML",
            rating: "8"
        },
        {
            name:"ReactJs",
            rating: "6"
        },
        {
            name:"GraphQL",
            rating: "5"
        },
        {
            name:"NodeJs",
            rating: "8"
        }
    ],
    langauges:[
        {
            name:"Gujarati",
            rating: 10
        },
        {
            name: "Hindi",
            rating: 10
        },
        {
            name: "English",
            rating: 8
        }
    ],
    experience:[
        {
            position:"Software Enginer",
            company: "Company Pvt. Ltd.",
            current:true,
            startDate: "March 2017",
            endDate: "current",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer ",
            company: "Company 2 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer",
            company: "Company 3 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            position:"Software Enginer",
            company: "Company 4 Pvt. Ltd.",
            current:false,
            startDate: "March 2017",
            endDate: "March 2017",
            overview:"Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ],
    education:[
        {
            college:"Some College of Engineering 1",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: true,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 2",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 3",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 4",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        },
        {
            college:"Some College of Engineering 5",
            degree:"Compouter Science And Engineering",
            startDate:"July 2007",
            endDate: "Jun 2011",
            current: false,
            overview: "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
        }
    ],
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/mhjadav/gatsby-starter-bootstrap-cv",
        iconClassName: "fa fa-github"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/mhjadav",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "Email",
        url: "mailto:mj@mojaave.com",
        iconClassName: "fa fa-envelope"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/mahipat-jadav-987986158/",
        iconClassName: "fa fa-linkedin"
      }
    ],
    copyright: "Copyright © 2018. @mahipat", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#5a76b9", // Used for setting manifest and progress theme colors.
    backgroundColor: "#fff" // Used for setting manifest background color.
  };
```

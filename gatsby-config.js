/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Piotr's Portfolio`,
    description: `This is Piotr's portfolio page where you can find some of his latest projects`,
    keywords: [
      `Frontend developer`,
      `React`,
      `JavaScript`,
      `HTML`,
      `CSS`,
      `Portfolio`,
      `Projects`,
      `Works`,
      `Frontend development`,
      `Programming`,
    ],
    image: '',
    author: `Panda`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `/src/assets/images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Code Pro:200,500,700,900', 'Open Sans:,300,400,600,700,800'],
        },
      },
    },
  ],
}

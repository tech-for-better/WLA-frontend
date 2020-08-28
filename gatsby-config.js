const siteMetadata = require('./site-metadata.js');

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layouts/layout.tsx'),
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.CMS_URL,
        contentTypes: ['Course', 'Career-Path'],
        queryLimit: 1000,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },
  ],
};

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
        apiURL: 'http://ec2-35-178-24-30.eu-west-2.compute.amazonaws.com:1337',
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

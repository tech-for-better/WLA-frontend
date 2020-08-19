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
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "restaurant",
          "category",
        ],
        queryLimit: 1000,
      },
    },
  ],
};

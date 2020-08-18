module.exports = {
  siteMetadata: {
    title: 'SkillsWest.London',
    footerLinks: [
      {
        name: "WLA",
        link: "wla.com",
      },
      {
        name: "WLB",
        link: "wlb.com"
      }
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layouts/layout.tsx'),
      },
    },
  ],
};

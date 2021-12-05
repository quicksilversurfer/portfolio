module.exports = {
  siteMetadata: {
    title: `Prateek Solanki - Interaction Designer`,
    description: `Interaction Design portfolio of Prateek Solanki | A User Experience designer in Siemens Healthcare based out of Princeton, NJ. `,
    author: `Prateek Solanki`,
    siteUrl: "http://prateeksolanki.com"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-46173690-1",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/ps-icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
  ],
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio Oct 2021",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-46173690-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `2019 Profile`
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
}

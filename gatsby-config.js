/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
    title: `Ross Buddie`,
    description: `A simple landing page for me...`,
    author: `Ross Buddie`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ross Buddie`,
        short_name: `Ross Buddie`,
        start_url: `/`,
        background_image: URL`https://img.favpng.com/2/11/5/color-geometry-triangle-pattern-png-favpng-t7TkucugG7c4TMHeCiC1E9528.jpg`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
  ]
}

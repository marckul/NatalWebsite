module.exports = {
  siteMetadata: {
    title: `Natal Instalacje`,
    url: `www.natal-instalacje.pl`,
    description: `Sprzedaż i wykonastwo instalacji wodno-kanalizacyjnych, centralnego ogrzewania, gazowych, montaż pomp ciepła, klimatyzacji , wentylacji z rekuperacją, a także fotowoltaiki i kolektorów słonecznych w Rybniku`, // TUTAJ POWINIEN ZNALEZC SIE OPIS STRONY
    keywords: `centralne ogrzewanie, fotowoltaika, solary, instalacje wodno kanalizacyjne, pompy ciepła, klimatyzacja, wentylacja z rekuperacją`,
    author: `@Marcin`,
    modelEntityName: `MODEL_DANYCH`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets-images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `natal-instalacje`,
        short_name: `natal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/natal-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -90,
        duration: 500,
      },
    },
  ],
}

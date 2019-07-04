module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            }
          }
        ]
      }
    },
 'gatsby-plugin-sharp',
 `gatsby-plugin-catch-links`,
 {
  resolve: 'gatsby-plugin-emotion',
  options: {
    autoLabel: process.env.NODE_ENV !== 'production',
    // eslint-disable-next-line
    labelFormat: `[filename]--[local]`,
  },
},
    
  ],
}
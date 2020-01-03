module.exports = {
  siteMetadata: {
    title: 'Katie Rose Felten - Software Developer',
    description:
      'Based in Atlanta, GA. A portfolio site we built by Gatsby.js + GraphQL + Emotion CSS',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
  ],
};

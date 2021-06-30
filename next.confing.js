const { extendDefaultPlugins } = require('svgo');

module.exports = {
  images: {
    domains: ['d246jgzr1jye8u.cloudfront.net'],
  },
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: extendDefaultPlugins([
            {
              name: 'removeAttrs',
              params: { attrs: '(data-name)' },
            },
            'cleanupIDs',
          ]),
        },
      },
    ],
  ],
};

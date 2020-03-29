// const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')

module.exports = 
withSass(withFonts({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
      {
        enforce: 'pre',
        test: /.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: ['./src/styles/fonts.scss', './src/styles/theme.scss'],
        },
      },
    );

    return config;
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  env: {
    AUTH0_DOMAIN: 'dev-57n7ui6b.au.auth0.com',
    AUTH0_CLIENT_ID: 'aQcxmgbto4g7k942JRGl4KecuudhWhSR'
  }
}))
  
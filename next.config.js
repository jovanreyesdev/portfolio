require('dotenv').config();
const withSass = require('@zeit/next-sass');

const { version } = require('./package.json');

const {
  ASSETS_BASE_URI,
  BASE_URI,
  NODE_ENV,
} = process.env;

// ASSETS_BASE_URI, BASE_URI, NODE_ENV is undefined

const nextConfig = {
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  crossOrigin: 'anonymous',
  assetPrefix: ASSETS_BASE_URI,
  env: {
    VERSION: version,
  },
  publicRuntimeConfig: {
    ASSETS_BASE_URI,
    BASE_URI,
    NODE_ENV,
    VERSION: version,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    return config;
  },
};

module.exports = withSass(nextConfig);

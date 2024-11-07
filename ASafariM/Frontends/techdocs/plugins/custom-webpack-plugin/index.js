// plugins\custom-webpack-plugin\index.js
const path = require('path');
module.exports = function (context, options) {
    return {
      name: 'custom-webpack-plugin',
      configureWebpack(config, isServer, utils) {
        return {
          devServer: {
            proxy: {
              '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true, 
              },
            },
          },
          resolve: {
            alias: {
              '@components': path.resolve(__dirname, '../src/components'),
            },
          },
        };
      },
    };
  };

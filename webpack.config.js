// webpack.config.js
var path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './frontend/strife.jsx',

  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },

      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      }


    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      '@mui/material': '@mui/material/modern',
      "@mui/styled-engine": "@mui/styled-engine-sc"
    }
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
};


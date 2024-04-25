const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = {
  mode: 'production',
  entry : "./src/index.js",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js"
  },
  resolve: {
    fallback: {
        "fs": false,
        "zlib": require.resolve("browserify-zlib"), // Fallback for zlib
      "buffer": require.resolve("buffer/"), // Fallback for buffer module
      "stream": require.resolve("stream-browserify"), // Fallback for stream
      "crypto": require.resolve("crypto-browserify"), // Fallback for crypto
      "assert": require.resolve("assert/"), // Fallback for assert
      "util": require.resolve("util/"), // Fallback for util
      "http": require.resolve("stream-http"), // Fallback for http
      "https": require.resolve("https-browserify"), // Fallback for https
      "url": require.resolve("url/"), // Fallback for URL handling
      "os": require.resolve("os-browserify"), // Fallback for OS
      "path": require.resolve("path-browserify"),  
    },

  },
  module: {
    rules: [
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              'img-loader'
            ]
        }
    ]
  },
  plugins: [ 
    new webpack.ProgressPlugin({
      handler: (percentage, message ) => {
        console.info(percentage, message);
      },
    })
]
}
const path = require('path')
const user = require('./scripts/utils/format-config')(require('./main.config.js'))

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

const CSSLoaders = [
  {
    loader: 'css-loader',
    options: {
      url: !!(user.appEnv === 'development'),
      sourceMap: true,
      minimize: !!(user.appEnv === 'production')
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
]

if (user.css.preprocessorLoader) {
  CSSLoaders.push(
    {
      loader: user.css.preprocessorLoader,
      options: {
        sourceMap: true
      }
    }
  )
}

const webpack = {
  output: {
    publicPath: user.paths.basepath,
    // we bundle from the www folder to avoid messing with the webpack dev middleware
    // all entries src/dest path are converted through scripts/utils/format-config.js
    path: user.paths.www,
    filename: '[name]',
    chunkFilename: '[name].[id].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'//,
        //options: vueLoaderConfig
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  plugins: []
}

module.exports = { CSSLoaders, webpack, user }

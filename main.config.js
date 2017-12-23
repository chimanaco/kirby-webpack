const path = require('path')

/**
 * BUNDLE ENTRY FILES
 * All file will be passed to your webpack config.
 * Formatted as { input: output }
 * paths are relative to your project root (__dirname)
 */
const entries = {
  'src/index.js': 'www/assets/bundle.js',
  'src/index.less': 'www/assets/bundle.css'
}

/**
 * CSS CONFIGURATION
 */
const css = {
  // Preprocessor used to bundle your CSS
  // This can be 'sass', 'less', 'stylus' or 'manual'.
  // Be sure to have your entries and sourcefiles named with the good file ext
  // —> .scss for sass / .less for less / .styl for stylus
  // Set to 'manual' to handle css yourself (using css-next for instance)
  preprocessor: 'less'
}

/**
 * DEVSERVER CONFIGURATION
 */
const devServer = {
  // Port used by the dev server
  port: 8080,

  // Use this option if you already have a local environment (like MAMP)
  // e.g. proxy: website.dev
  // don't forget to rename config.localhost.php if you use a vhost
  proxy: false,

  // The alias/path to the php binary. OSX has PHP available natively.
  // You have to edit this to have the devServer working on Windows.
  // Use the proxy opt if you can't use / don't want to use a built-in php serv.
  phpBinary: 'php',

  // Set this to true to display PHP logs in your terminal
  // /!\ does nothing if you use the `proxy` option
  logPhpErrors: true,

  // Use Eslint Loader?
  // If true, your code will be linted during bundling and
  // linting errors and warnings will be shown in the console.
  useEslint: true,
  // If true, eslint errors and warnings will also be shown in the error overlay
  // in the browser.
  showEslintErrorsInOverlay: false
}

/**
 * FOLDER ARCHITECTURE
 * All paths used in kirby-webpack.
 * change them if you want to customize the folder architecture.
 */
const paths = {}

// public folder to deploy to your server
// if you use a proxy, this is often the document root of the server used
paths.www = path.join(__dirname, 'www')

// public baseUrl of your site, generally '/'.
// it often change depending on your environment,
// the correct one will be chosen from the value of appEnv.
paths.basepaths = {
  development: '/',
  preprod: '/',
  production: '/'
}

// all kirby paths
paths.kirby = {
  core: path.join(paths.www, 'kirby'),
  panel: path.join(paths.www, 'panel'),
  assets: path.join(paths.www, 'assets'),
  cache: path.join(paths.www, 'site', 'cache'),
  fields: path.join(paths.www, 'site', 'fields'),
  tags: path.join(paths.www, 'site', 'tags'),
  plugins: path.join(paths.www, 'site', 'plugins'),
  widgets: path.join(paths.www, 'site', 'widgets')
}

// the appEnv variable can be used to create environment-specific behaviours
// By default, appEnv can be one of those three values:
//   - development (via npm run start)
//   - preprod (via npm run build:preprod)
//   - production (via npm run build or npm run stats)
const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'development'

// appEnv is used to choose the correct basepath from paths.basepaths
paths.basepath = paths.basepaths[appEnv] || paths.basepaths.development

module.exports = { paths, entries, css, devServer, appEnv }

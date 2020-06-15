const argv = require('minimist')(process.argv);

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      './test-bundler.js'
    ],
    exclude: [],
    preprocessors: {
      './test-bundler.js': ['webpack', 'sourcemap']
    },
    webpack: Object.assign({}, require('./webpack.config.js')(), {
      devtool: 'inline-source-map',
      mode: 'development',
      entry: null,
      externals: {
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        'react-addons-test-utils': 'window'
      }
    }),
    webpackServer: {
      noInfo: true
    },
    reporters: argv.teamcity ? ['progress', 'teamcity'] : ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['CustomElectron'],
    customLaunchers: {
      CustomElectron: {
        base: 'Electron',
        browserWindowOptions: {
          show: false,
          skipTaskbar: true,
          height: 1024,
          width: 768
        },
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    singleRun: true
  });
};

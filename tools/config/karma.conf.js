// Karma configuration file;
const path = require('path');
const glob = require('glob');
const context = process.cwd();
const nodeModules = path.resolve(__dirname, '../node_modules');

// maybe it could be a good idea to remove angular from here
// Let's the develper import what he needs
const localDeps = [
  'angular/angular.js',
  'angular-mocks/angular-mocks.js',
  'phantomjs-polyfill/bind-polyfill.js',
].map(file => path.join(nodeModules, file));

const basePath = glob.sync('components/*').length > 0 ? 'components/*/' : '';

const paths = {
  tests: `${basePath}test/**/*.spec.js`,
  modules: `${basePath}modules/**/test/**/*.spec.js`,
  vendors: `${basePath}dist/common.bundle.js`,
};

const testsFolder = [paths.tests].map(file => path.join(context, file));

// This line here solve issue: webpackJsonp
// we need to incluce vendors (angular, lodash...)
localDeps.push(path.join(context, paths.vendors));
const files = localDeps.concat(testsFolder);

const reporters = ['mocha', 'coverage'];

// preprocessors configuration
const tests = path.resolve(context, paths.tests);
const modules = path.resolve(context, paths.modules);

// Preprocessors and plugins: webpack and sourcemap
const plugins = ['webpack', 'sourcemap'];
const preprocessors = {
  [modules]: plugins,
  [tests]: plugins,
};

module.exports = (config) => {
  config.set({
    quiet: true,
    frameworks: ['jasmine'],
    files,
    preprocessors,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
      },
    },
    reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
  });
};

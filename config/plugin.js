'use strict';

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// exports.webpackMiddleware = {
//   enable: true,
//   package: 'egg-webpack-middleware',
// };
// config/config.default.js
exports.development = {
  // don't reload when ts fileChanged
  // https://github.com/sindresorhus/multimatch
  reloadPattern: [ '**', '!**/*.ts' ],
};

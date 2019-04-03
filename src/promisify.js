import pify from 'pify';

module.exports = {
  fs: pify(require('fs')),
  mkdirp: pify(require('mkdirp'))
};

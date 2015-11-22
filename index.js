'use strict';

var exec = require('child_process').exec;

module.exports = function (callback) {
  exec('gnome-terminal --version', function (err, stdout) {
    if (err !== null) {
      return undefined;
    }

    var match = stdout.match(/\d+\.\d+\.\d+/);

    if (match === null) {
      return undefined;
    }

    callback(match[0]);
  });
};

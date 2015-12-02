'use strict';

var exec = require('child_process').exec;

/**
 * Gets the version of the system's gnome-terminal.
 *
 * @returns {string|undefined} the version for the system's gnome-terminal.
 * undefined if gnome-terminal does not exist or gives unexpected output.
 */
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

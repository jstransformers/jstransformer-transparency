'use strict';

var transparency = require('transparency');
var jsdom = require('jsdom');

exports.name = 'transparency';
exports.outputFormat = 'html';

exports.compileAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    jsdom.env(str, function (err, window) {
      if (err) {
        reject(err);
      }
      else {
        resolve(function (locals) {
          var out = transparency.render(window.document.body, locals);
          return out.innerHTML;
        });
      }
    });
  });
};

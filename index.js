'use strict';

var transparency = require('transparency');
var jsdom = require('jsdom');

exports.name = 'transparency';
exports.outputFormat = 'html';

exports.renderAsync = function (str, options, locals) {
  return new Promise(function (resolve, reject) {
    jsdom.env(str, function (err, window) {
      if (err) {
        reject(err);
      }
      else {
        var opts = options || {}
        var out = transparency.render(window.document.body, locals, opts, opts);
        resolve(out.innerHTML)
      }
    });
  });
};

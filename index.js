'use strict';

var transparency = require('transparency');
var extend = require('extend-shallow');

exports.name = 'transparency';
exports.inputFormats = ['transparency'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var data = extend({}, options, locals);
  return transparency.render(str, data);
};

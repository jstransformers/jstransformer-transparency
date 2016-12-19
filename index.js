'use strict'

var transparency = require('transparency')
var jsdom = require('jsdom')
var extend = require('extend-shallow')

exports.name = 'transparency'
exports.outputFormat = 'html'

exports.compileAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    jsdom.env(str, function (err, window) {
      if (err) {
        reject(err)
      } else {
        resolve(function (locals) {
          var out = transparency.render(window.document.body, extend({}, options, locals))
          return out.innerHTML
        })
      }
    })
  })
}

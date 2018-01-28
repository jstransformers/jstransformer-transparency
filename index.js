'use strict'

const transparency = require('transparency')
const jsdom = require('jsdom')
const extend = require('extend-shallow')

exports.name = 'transparency'
exports.outputFormat = 'html'

exports.compileAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    jsdom.env(str, function (err, window) {
      if (err) {
        reject(err)
      } else {
        resolve(function (locals) {
          const out = transparency.render(window.document.body, extend({}, options, locals))
          return out.innerHTML
        })
      }
    })
  })
}

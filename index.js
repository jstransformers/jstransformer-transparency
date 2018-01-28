'use strict'

const transparency = require('transparency')
const jsdom = require('jsdom')
const extend = require('extend-shallow')

const {JSDOM} = jsdom

exports.name = 'transparency'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  const windowdom = (new JSDOM(str)).window
  return locals => {
    const out = transparency.render(windowdom.document.body, extend({}, options, locals))
    return out.innerHTML
  }
}

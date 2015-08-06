'use strict';

var cheerio = require('cheerio');
var data = '<span class="hi"></span>';

module.exports = cheerio.load(data);

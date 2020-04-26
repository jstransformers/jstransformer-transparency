# jstransformer-transparency

[Transparency](http://leonidas.github.io/transparency/) support for [JSTransformers](https://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-transparency/master.svg)](https://travis-ci.org/jstransformers/jstransformer-transparency)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-transparency/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-transparency)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-transparency/master.svg)](http://david-dm.org/jstransformers/jstransformer-transparency)

[![NPM version](https://img.shields.io/npm/v/jstransformer-transparency.svg)](https://www.npmjs.org/package/jstransformer-transparency)

## Installation

    npm install jstransformer-transparency

## API

```js
var transparency = require('jstransformer')(require('jstransformer-transparency'))

console.log(transparency.render('<span class="hi"></span>', {hi: 'hello'}).body);
//=> '<span class="hi">hello</span>'
```

## License

MIT

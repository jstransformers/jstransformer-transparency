# jstransformer-transparency [![The MIT License][license-img]][license-url]

<a href="http://github.com/jstransformers/jstransformer"><img src="https://cdn.rawgit.com/jstransformers/jstransformer/master/logo.svg" align="right" width="100px" height="100px" /></a>

[transparency](http://leonidas.github.io/transparency/) support for [JSTransformers][jstransformers-url].

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-transparency --save
npm test
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var transparency = require('jstransformer')(require('jstransformer-transparency'));

console.log(transparency.render('<span class="hi"></span>', {hi: 'hello'}).body);
//=> '<span class="hi">hello</span>'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jstransformers/jstransformer-transparency/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-transparency
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-transparency.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/jstransformers/jstransformer-transparency
[travis-img]: https://img.shields.io/travis/jstransformers/jstransformer-transparency.svg

[coveralls-url]: https://coveralls.io/r/jstransformers/jstransformer-transparency
[coveralls-img]: https://img.shields.io/coveralls/jstransformers/jstransformer-transparency.svg

[david-url]: https://david-dm.org/jstransformers/jstransformer-transparency
[david-img]: https://img.shields.io/david/jstransformers/jstransformer-transparency.svg

[jstransformers-url]: http://github.com/jstransformers

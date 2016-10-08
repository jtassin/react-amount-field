# react-opensource-component-template
[![npm version](https://badge.fury.io/js/react-opensource-component-template.svg)](https://badge.fury.io/js/react-opensource-component-template) 
[![Build Status](https://travis-ci.org/jtassin/react-opensource-component-template.svg?branch=master)](https://travis-ci.org/jtassin/react-opensource-component-template)
[![codecov](https://codecov.io/gh/jtassin/react-opensource-component-template/branch/master/graph/badge.svg)](https://codecov.io/gh/jtassin/react-opensource-component-template)
[![Code Climate](https://codeclimate.com/github/jtassin/react-opensource-component-template/badges/gpa.svg)](https://codeclimate.com/github/jtassin/react-opensource-component-template)

React component for displaying formatted amount with currency


## Demo & Examples

Live demo: [jtassin.github.io/react-opensource-component-template](http://jtassin.github.io/react-opensource-component-template/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.


## Installation

The easiest way to use react-opensource-component-template is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/ReactFormattedAmount.min.js` i n your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-opensource-component-template --save
```


## Usage

One installed, just require and use the component:
```javascript
import React from `react`;
import MyComponent from 'react-opensource-component-template';

React.render(<MyComponent>Replace with real example</MyComponent>, document.querySelector('#main'));
```


### Properties

__PROPERTIES__

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. 

## License

MIT, see [LICENSE](/LICENSE) for details.

## Contributors

[![Julien TASSIN](https://avatars0.githubusercontent.com/u/1771191?v=3&s=144)](https://github.com/roylee0704/) |
---|
[Julien TASSIN](https://github.com/jtassin) |

Copyright (c) 2016 Julien TASSIN.


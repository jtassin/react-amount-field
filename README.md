# react-amount-field
[![npm version](https://badge.fury.io/js/react-amount-field.svg)](https://badge.fury.io/js/react-amount-field) 
[![Build Status](https://travis-ci.org/jtassin/react-amount-field.svg?branch=master)](https://travis-ci.org/jtassin/react-amount-field)
[![codecov](https://codecov.io/gh/jtassin/react-amount-field/branch/master/graph/badge.svg)](https://codecov.io/gh/jtassin/react-amount-field)
[![Code Climate](https://codeclimate.com/github/jtassin/react-amount-field/badges/gpa.svg)](https://codeclimate.com/github/jtassin/react-amount-field)

React component for displaying input field transforming decimal value to cent value.
It will by example transform 3.56 to 356.


## Demo & Examples

Live demo: [jtassin.github.io/react-amount-field](http://jtassin.github.io/react-amount-field/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.


## Installation

The easiest way to use react-amount-field is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/ReactAmountField.min.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable. If you want to use the redux-form/material-ui connector, you also need to include material-ui in your dependencies.

```
npm install react-amount-field --save
```


## Usage

One installed, just require and use the component:
```javascript
import React from `react`;
import ReactDOM from `react-dom`;
import AmountField from 'react-amount-field';

ReactDOM.render(<AmountField value="1337"><input type="text" /></AmountField>, document.querySelector('#main'));
```


### Properties

| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| value | String/Number | null | The value of the field in cents |


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


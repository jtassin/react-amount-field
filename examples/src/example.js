import React from 'react';
import ReactDOM from 'react-dom';
import githubLight from './github-light.css';
import normalize from './normalize.css';
import stylesheet from './stylesheet.css';
import { AppContainer } from 'react-hot-loader';

import Example1 from './example1.js';

ReactDOM.render(<AppContainer><Example1 /></AppContainer>, document.getElementById('example1'));

import Example2 from './example2.js';

ReactDOM.render(<AppContainer><Example2 /></AppContainer>, document.getElementById('example2'));


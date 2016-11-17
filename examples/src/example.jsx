import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Example1 from './Example1';
import Example2 from './Example2';
import ReduxFormExample from './ReduxFormExample';
import store from './store';

const RequiredExample1 = require('./Example1').default;
const RequiredExample2 = require('./Example2').default;
const RequiredReduxFormExample = require('./ReduxFormExample').default;

require('./github-light.css');
require('./normalize.css');
require('./stylesheet.css');

/* eslint-disable no-undef */
ReactDOM.render(<AppContainer><Example2 /></AppContainer>, document.getElementById('example2'));

/* eslint-disable no-undef */
const example1El = document.getElementById('example1');
ReactDOM.render(
  <AppContainer>
    <Example1 />
  </AppContainer>,
  example1El,
);

/* eslint-disable no-undef */
const example2El = document.getElementById('example2');
ReactDOM.render(
  <AppContainer>
    <Example2 />
  </AppContainer>,
  example2El,
);

/* eslint-disable no-undef */
const reduxFormEl = document.getElementById('redux-form');
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ReduxFormExample />
    </Provider>
  </AppContainer>,
  reduxFormEl,
);

if (module.hot) {
  module.hot.accept('./Example1', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    ReactDOM.render(
      <AppContainer>
        <RequiredExample1 />
      </AppContainer>,
      example1El,
    );
  });

  module.hot.accept('./ReduxFormExample', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    ReactDOM.render(
      <AppContainer>
        <RequiredExample2 />
      </AppContainer>,
      example1El,
    );
  });

  module.hot.accept('./Example2', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    ReactDOM.render(
      <AppContainer>
        <RequiredReduxFormExample />
      </AppContainer>,
      example2El,
    );
  });
}

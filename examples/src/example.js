import React from 'react';
import ReactDOM from 'react-dom';
import githubLight from './github-light.css';
import normalize from './normalize.css';
import stylesheet from './stylesheet.css';
import { AppContainer } from 'react-hot-loader';
import Example1 from './Example1.js';
import Example2 from './Example2.js';

ReactDOM.render(<AppContainer><Example2 /></AppContainer>, document.getElementById('example2'));

const example1El = document.getElementById('example1');
ReactDOM.render(
  <AppContainer>
    <Example1 />
  </AppContainer>,
  example1El
);

const example2El = document.getElementById('example2');
ReactDOM.render(
  <AppContainer>
    <Example2 />
  </AppContainer>,
  example2El
);

if (module.hot) {
  module.hot.accept('./Example1', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Example1').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      example1El
    );
  });

  module.hot.accept('./Example2', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./Example2').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      example2El
    );
  });
}

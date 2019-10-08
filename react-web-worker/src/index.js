import React from 'react';
import ReactDOM from 'react-dom';
import App from '@src/containers/App/App';
import * as serviceWorker from '@src/serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

serviceWorker.register();

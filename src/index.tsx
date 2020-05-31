import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import './styles/Panel.scss'
import 'react-circular-progressbar/dist/styles.css';
import './styles/Details.scss'
import './styles/user.scss'
import './styles/responsive.scss'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

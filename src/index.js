import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyResume from "./MyResume";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MyResume />
  </React.StrictMode>,
  document.getElementById("my_resume")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router';
import * as serviceWorker from './serviceWorker';
import 'react-flexible'
import "reset-css"
import 'antd/dist/antd.css'; 
import '../node_modules/font-awesome/css/font-awesome.min.css'
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

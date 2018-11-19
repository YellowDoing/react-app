import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import Axios from 'axios'

Axios.defaults.baseURL = 'http://139.199.87.52:8080';
ReactDOM.render(<App />, document.getElementById('root'));


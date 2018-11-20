import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import Axios from 'axios'

//axios全局配置
Axios.defaults.baseURL = 'http://139.199.87.52:8080';
//Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://139.199.87.52:8080'
//Axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(<App />, document.getElementById('root'));


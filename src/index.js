import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/App';
import Login from './component/Login/Login';
import Axios from 'axios'
import {Form} from "antd";

//axios全局配置
Axios.defaults.baseURL = 'http://139.199.87.52:8080';
//Axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://139.199.87.52:8080'
//Axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
const LoginPage = Form.create()(Login);
ReactDOM.render(<App />, document.getElementById('root'));



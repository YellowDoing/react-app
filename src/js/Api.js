import Axios from 'axios'

//登录
export function login(username,password,successCallback){
    Axios.post('/user/Login',{username:username, password:password}).then(successCallback)
}

//注册
export function register(username,password,successCallback){
    Axios.post('/user',{username:username, password:password}).then(successCallback)
}


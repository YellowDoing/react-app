import React, { Component, Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './MyHeader.css';
import { Avatar, Dropdown, Menu, Icon } from 'antd';
import Axios from 'axios';


class MyHeader extends Component {


    menu = (<Menu style={{ paddingRight: '15px' }} onClick={this.handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item key="2"><Icon type="setting" />退出登录</Menu.Item>

    </Menu>);


componentDidMount(){
    Axios.post('/user').then(function (response) {
        console.log(response);
    })
}

    handleMenuClick() {
        alert('asdawdasdw')
       
    };


    render() {
        return (
            <Fragment>
                <img alt='logo' src={logo} width='34px' height='34px' />
                <span className='title'>华币数字交易所</span>
                <div className='user'>
                    <Dropdown placement='bottomCenter' overlay={this.menu}>
                        <div>
                            <Avatar className='avatar' icon="user" />
                            <span className='name'>用户名</span>
                        </div>
                    </Dropdown>
                </div>
            </Fragment>
        )
    }
}


export default MyHeader;

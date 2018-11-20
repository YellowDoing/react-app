import React, { Component, Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './MyHeader.css';
import { Avatar, Dropdown, Menu, Icon } from 'antd';

class MyHeader extends Component {


    menu = (<Menu style={{ paddingRight: '15px' }} onClick={this.handleMenuClick}>
        <Menu.Item key="1"><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item key="2"><Icon type="setting" />退出登录</Menu.Item>
    </Menu>);

    handleMenuClick() {
        alert('asdawdasdw')
    };


    render() {
        return (
            <Fragment>
                <img alt='logo' src={logo} width='34px' height='34px' />
                <span className='title'>深圳市排水户管理系统</span>
                <div className='user'>
                    <Dropdown placement='bottomCenter' overlay={this.menu}>
                        <div>
                            <Avatar className='avatar' icon="user" />
                            <span className='name'>罗湖审查员1</span>
                        </div>
                    </Dropdown>
                </div>
            </Fragment>
        )
    }
}


export default MyHeader;

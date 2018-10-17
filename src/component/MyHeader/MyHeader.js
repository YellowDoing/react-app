import React, { Component, Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './MyHeader.css';
import { Avatar } from 'antd';


class MyHeader extends Component {

    render() {
        return (
            <Fragment>
                <img alt='logo' src={logo} width='34px' height='34px' />
                <span className='title' >华币数字交易所</span>
                <div className='user'>
                    <span className='name'>用户名</span>
                    <Avatar className='avatar' icon="user" />
                </div>

            </Fragment>
        )
    }
}


export default MyHeader;
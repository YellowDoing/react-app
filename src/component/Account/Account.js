import React, { Component } from 'react';
import './Account.css';
import { Table, Pagination, Icon } from 'antd';


const data = [{
    key: '1',
    nickname: '黄干1',
    phone: '189****7537',
    type: '管理员'
}, {
    key: '2',
    nickname: '黄干2',
    phone: '189****7537',
    type: '会员'
}, {
    key: '3',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
}, {
    key: '4',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
}, {
    key: '5',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
}, {
    key: '6',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
}, {
    key: '7',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
}, {
    key: '8',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
},
{
    key: '9',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
},
{
    key: '10',
    nickname: '黄干3',
    phone: '189****7537',
    type: '一般用户'
}];


const columns = [{
    title: '用户名',
    dataIndex: 'nickname',
    key: 'nickname',
    render: text => <a>{text}</a>,
}, {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
}, {
    title: '账户类型',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '操作',
    fixed: 'right',
    width: 130,
    render: (text, record) => (
        <span>
            <a href="#">编辑</a>
            <span className="ant-divider" />
            <a href="#">删除</a>
            <span className="ant-divider" />
        </span>
    ),
}];

class Account extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className='flex-column-reverse'>
                <Table pagination={false} columns={columns} dataSource={data} bordered />
                <Pagination scroll={{ x: true }} pageSize={10} className='pagination' showQuickJumper total={500} onChange={this.onPageChanged} />
            </div>
        )
    }

    onPageChanged(pageNumber) {

    }
}

export default Account;
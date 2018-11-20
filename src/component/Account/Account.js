import React, { Component } from 'react';
import './Account.css';
import { Table, Pagination } from 'antd';


const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        id: i + 1,
        area: '坪山区',
        streat: '坪山街道',
        community: '六联社区',
        name: `六联排水户 ${i}`,
    });
}


//表格头部设置
const columns = [{
    title: '序号',
    dataIndex: 'id',
}, {
    title: '市辖区',
    dataIndex: 'area',
    filters: [{
        text: '罗湖区',
        value: '罗湖区',
    }, {
        text: '南山区',
        value: '南山区',
    }, {
        text: '福田区',
        value: '福田区',
    }, {
        text: '保安区',
        value: '保安区',
    }, {
        text: '龙岗区',
        value: '龙岗区',
    }, {
        text: '盐田区',
        value: '盐田区',
    }, {
        text: '龙华区',
        value: '龙华区',
    }, {
        text: '坪山区',
        value: '坪山区',
    }, {
        text: '光明区',
        value: '光明区',
    }, {
        text: '大鹏新区',
        value: '大鹏新区',
    }, {
        text: '深汕合作区',
        value: '深汕合作区',
    }],
    filterMultiple: false,
    onFilter: (value, record) =>{
        console.log(value)
        console.log(record)
    }
}, {
    title: '街道',
    dataIndex: 'streat',
}, {
    title: '社区',
    dataIndex: 'community',
}, {
    title: '排水户',
    dataIndex: 'name',
}, {
    title: '操作',
    fixed: 'right',
    width: 130,
    render: (text, record) => (
        <span>
            <a href>编辑</a>
            <span className="ant-divider" />
            <a href>删除</a>
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
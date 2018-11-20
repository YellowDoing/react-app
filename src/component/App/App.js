import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Spin, Layout, Menu, Breadcrumb, Icon } from 'antd';
import Account from '../Account/Account'
import MyHeader from '../MyHeader/MyHeader'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Breadcrumbs: ['概览'],
            loading: false
        };
    }

    render() {

        return (
            <Layout>
                <Header className='header'>
                    <MyHeader />
                </Header>

                <Layout>
                    <Sider width={225} style={{ background: '#fff' }}>

                        <Menu onClick={this.onMenuSelected.bind(this)} mode={"inline"}
                            style={{ height: '100%' }}>
                            <Menu.Item key="概览">
                                <Icon type="ant-design" /> <span>概览</span>
                            </Menu.Item>

                            <SubMenu key="账户管理" title={<span><Icon type="user" />账户管理</span>}>
                                <Menu.Item key="检查员">检查员</Menu.Item>
                                <Menu.Item key="审核员">审核员</Menu.Item>
                                <Menu.Item key="查询员">查询员</Menu.Item>
                            </SubMenu>

                            <SubMenu key="数据普查" title={<span><Icon type="bar-chart" />数据普查</span>}>
                                <Menu.Item key="已普查">已普查</Menu.Item>
                                <Menu.Item key="待普查">待普查</Menu.Item>
                            </SubMenu>

                            <SubMenu key="数据审核" title={<span><Icon type="area-chart"/>数据审核</span>}>
                                <Menu.Item key="已审核">已审核</Menu.Item>
                                <Menu.Item key="待审核">待审核</Menu.Item>
                    
                            </SubMenu>

                            <SubMenu key="数据查询" title={<span><Icon type="dot-chart" />数据查询</span>}>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Layout style={{ padding: '0 22px 22px' }}>

                        <Breadcrumb style={{ margin: '14px 0' }}>
                            {
                                this.state.Breadcrumbs.reverse().map((value, key) => {
                                    return <Breadcrumb.Item key={key}> {value}</Breadcrumb.Item>
                                })
                            }
                        </Breadcrumb>

                        <Spin size="large" spinning={this.state.loading} delay={500}>
                            <Content style={{ background: '#fff', padding: 0, margin: 0, minHeight: 280 }}>
                                <Account />
                            </Content>
                        </Spin>
                    </Layout>
                </Layout>
            </Layout>
        );
    }

    onMenuSelected(o) {
        this.setState({ Breadcrumbs: o.keyPath });
    }
}

export default App;

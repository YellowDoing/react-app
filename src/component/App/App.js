import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Spin,Layout, Menu, Breadcrumb, Icon } from 'antd';
import Account from '../Account/Account'
import MyHeader from '../MyHeader/MyHeader'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            Breadcrumbs: ['概览']
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
                                <Menu.Item key="账户管理-1">option1</Menu.Item>
                                <Menu.Item key="账户管理-2">option2</Menu.Item>
                                <Menu.Item key="账户管理-3">option3</Menu.Item>
                                <Menu.Item key="账户管理-4">option4</Menu.Item>
                            </SubMenu>

                            <SubMenu key="社区" title={<span><Icon type="compass" />社区</span>}>
                                <Menu.Item key="社区-1">option5</Menu.Item>
                                <Menu.Item key="社区-2">option6</Menu.Item>
                                <Menu.Item key="社区-3">option7</Menu.Item>
                                <Menu.Item key="社区-4">option8</Menu.Item>
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

                        <Spin size="large">
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

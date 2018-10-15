import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends Component {

  render() {
    return (
      <Layout>
        <Header >
          
        </Header>
        <Layout>

          <Sider width={225} style={{ background: '#fff' }}>

            <Menu mode={"inline"} style={{ height: '100%', borderRight: 0 }}>

              <SubMenu key="sub1" title={<span><Icon type="user" />账户管理</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>

              <SubMenu key="sub2" title={<span><Icon type="laptop" />社区</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          
          <Layout style={{ padding: '0 22px 22px' }}>
            <Breadcrumb style={{ margin: '14px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>

            <Content style={{ background: '#fff', padding: 22, margin: 0, minHeight: 280 }}>
              Content
            </Content>

          </Layout>
        </Layout>
      </Layout>

    );
  }
}

export default App;

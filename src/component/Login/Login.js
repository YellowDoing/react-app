import React, {Component} from 'react';
import './Login.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import logo from '../../assets/logo.svg'

const FormItem = Form.Item;


class Login extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className='el-root'>
                <Form onSubmit={this.handleSubmit} className="login-form">


                    <div className='logo-layout'>
                        <img className='logo' src={logo}/>
                    </div>


                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入您的账号!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="账号"/>
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入您的密码!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="密码"/>
                        )}
                    </FormItem>

                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住账号密码</Checkbox>
                        )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        没有账号? <a>注册</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}


export default Login;
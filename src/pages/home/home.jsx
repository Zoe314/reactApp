import React from "react";
import "./index.scss";
import { Row, Col, Form, Icon, Input, Button, message } from "antd";
// import { inject, observer } from 'mobx-react'
const FormItem = Form.Item;

// @inject('Store') @observer
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }
    state = {}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, values) => {
            if (!error) {
                let user = values.username;
                let password = values.password;
                if (user == 'admin' && password == 'admin') {
                    message.success('恭喜您登录成功')
                    this.setState({
                        logged: true
                    })
                    values = {};
                    this.props.history.push("/button");

                } else {
                    message.error('用户名或密码输入错误，请重新输入')
                    values = {};
                }

            }
        });
    };

    componentDidMount() {
        // this.props.Store.setKey(this.props.location.pathname)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            < Form className="form" onSubmit={this.handleSubmit} >
                <Row id="login" className="animated fadeInLeftBig" type="flex" justify="center" align="middle">
                    <Col className="card" span={4}>
                        <h1 className="logo">登录</h1>
                        <FormItem label="用户名">
                            {getFieldDecorator("username", {
                                rules: [
                                    {
                                        required: true,
                                        message: "请输入用户名..."
                                    }
                                ]
                            })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />)}

                        </FormItem>
                        <FormItem label="密码">
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "请输入密码.."
                                    }
                                ]
                            })(<Input prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="请输入密码.." />)}

                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="button" >登录</Button>
                        </FormItem>

                    </Col>
                </Row>
            </Form >
        );
    }
}
export default Form.create()(Login);

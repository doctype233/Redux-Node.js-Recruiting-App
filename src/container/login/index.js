import React, { Component } from 'react';
import Logo from '@/component/logo';
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile';
import './index.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    regist(){
        this.props.history.push('/regist')
    }
    render() {
        return (
            <div className='login'>
                <Logo />
                <h2>登录界面</h2>
                <WingBlank>
                    <WhiteSpace size='lg'/>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <WhiteSpace size='sm'/>
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={()=>{this.regist()}}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
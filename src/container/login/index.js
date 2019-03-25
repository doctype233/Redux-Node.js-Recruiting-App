import React, { Component } from 'react';
import Logo from '@/component/logo';
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { login } from '@/redux/user.redux';
import './index.css';

@connect(
    state=>state.user,
    {login}
)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            pwd:''
        }
    }
    regist(){
        this.props.history.push('/regist')
    }
    login(){
        this.props.login(this.state)
    }
    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }
    render() {
        return (
            <div className='login'>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo />
                <h2>登录界面</h2>
                <WingBlank>
                    <WhiteSpace size='lg'/>
                    <InputItem onChange={(value)=>this.handleChange('user',value)}>用户名</InputItem>
                    {
                            this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null
                        }
                    <InputItem type='password' onChange={(value)=>this.handleChange('pwd',value)}>密码</InputItem>
                    <WhiteSpace size='sm'/>
                    <Button type='primary' onClick={()=>this.login()}>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={()=>this.regist()}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
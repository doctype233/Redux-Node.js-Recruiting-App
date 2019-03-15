import React, { Component } from 'react';
import Logo from '@/component/logo';
import { InputItem, WhiteSpace, WingBlank, Radio, Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { regist } from '@/redux/user.redux';
import './index.css';


@connect(
    state => state.user,
    { regist }
)
class Regist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'boss',
            user: '',
            pwd: '',
            repeatPwd: ''
        }
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
    handleRegist() {
        this.props.regist(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>

                <Logo></Logo>
                <h2 style={{ textAlign: 'center' }}>注册</h2>
                <WingBlank>
                    <WhiteSpace />
                    
                    <InputItem onChange={(v) => this.handleChange('user', v)}>用户名</InputItem>
                    {
                        this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null
                    }
                    <InputItem onChange={(v) => this.handleChange('pwd', v)}>密码</InputItem>
                    <InputItem onChange={(v) => this.handleChange('repeatPwd', v)}>确认密码</InputItem>
                    <WhiteSpace />
                    <h4>注册身份</h4>
                    <RadioItem
                        checked={this.state.type == 'genius'}
                        onChange={() => this.handleChange('type', 'genius')}
                    >
                        牛人
                    </RadioItem>
                    <RadioItem
                        checked={this.state.type == 'boss'}
                        onChange={() => this.handleChange('type', 'boss')}

                    >
                        BOSS
                    </RadioItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={() => this.handleRegist()}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Regist;
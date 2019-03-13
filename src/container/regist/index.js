import React, { Component } from 'react';
import Logo from '@/component/logo';
import { InputItem, WhiteSpace, WingBlank, Radio } from 'antd-mobile';


class Regist extends Component {
    constructor(props){
        super(props);
        this.state={
            type:'genius'
        }
    }
    render() {
        const RadioItem=Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <h2 style={{textAlign:'center'}}>注册</h2>
                <WingBlank>
                    <WhiteSpace />
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                    <WhiteSpace/>
                    <h4>注册身份</h4>
                    <RadioItem checked={this.state.type=='genius'}>牛人</RadioItem>
                    <RadioItem checked={this.state.type=='boss'}>BOSS</RadioItem>
                </WingBlank>
            </div>
        );
    }
}

export default Regist;
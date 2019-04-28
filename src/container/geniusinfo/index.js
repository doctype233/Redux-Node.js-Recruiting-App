import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { NavBar, InputItem, TextareaItem, List,Button, WhiteSpace } from 'antd-mobile';
import AvatarSelector from '@/component/avatar-selector';
import {connect} from 'react-redux';
import {update} from '@/redux/user.redux';

@connect(
    state=>state.user,
    {update}
)
class GeniusInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar:''
        }
        this.selectAvatar=this.selectAvatar.bind(this)
    }
    onChange(key, v) {
        this.setState({
            [key]: v
        })
    }
    selectAvatar(text){
        this.setState({avatar:text})
    }
    update=()=>{
        this.props.update(this.state)
    }
    render() {
        const path=this.props.location.pathname;
        const redirectTo=this.props.redirectTo;
        return (
            <div >
                {redirectTo && redirectTo!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
                <NavBar mode="dark">完善信息</NavBar>
                <AvatarSelector 
                    selectAvatar={this.selectAvatar}
                />
                <List renderHeader='职位发布'>
                    <InputItem onChange={(v) => { this.onChange('title', v) }}>求职岗位</InputItem>
                    <TextareaItem title='个人简介' rows={3} autoHeight onChange={(v) => { this.onChange('desc', v) }}></TextareaItem>
                </List>
                <WhiteSpace/>
                <Button type='primary' onClick={this.update}>保存</Button>
            </div>
        );
    }
}

export default GeniusInfo;
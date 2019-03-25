import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem, List,Button, WhiteSpace } from 'antd-mobile';
import AvatarSelector from '@/component/avatar-selector';

class Bossinfo extends Component {
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
    render() {
        return (
            <div >
                <NavBar mode="dark">完善信息</NavBar>
                <AvatarSelector 
                    selectAvatar={this.selectAvatar}
                />
                <List renderHeader='职位发布'>
                    <InputItem onChange={(v) => { this.onChange('title', v) }}>招聘职位</InputItem>
                    <InputItem onChange={(v) => { this.onChange('company', v) }}>公司名称</InputItem>
                    <InputItem onChange={(v) => { this.onChange('money', v) }}>薪资</InputItem>
                    <TextareaItem title='职位要求' rows={3} autoHeight onChange={(v) => { this.onChange('desc', v) }}></TextareaItem>
                </List>
                <WhiteSpace/>
                <Button type='primary'>保存</Button>
            </div>
        );
    }
}

export default Bossinfo;
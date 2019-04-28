import React, { Component } from 'react';
import {NavBar} from 'antd-mobile';
import {connect} from 'react-redux';
import {Switch,Route} from 'react-router-dom';
import NavLinkBar from '../navlink';
import Boss from '../boss';


function Genius(){
    return (
        <div>Genius</div>
    )
}
function Msg(){
    return (
        <div>Msg</div>
    )
}
function User(){
    return (
        <div>user</div>
    )
}

@connect(
    state=>state
)
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {pathname} = this.props.location;
        const user=this.props.user;
        console.log(user)
        const navList=[
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.type=='genius'
            },{
                path:'/genius',
                text:'BOSS',
                icon:'job',
                title:'BOSS列表',
                component:Genius,
                hide:user.type=='boss'
            },{
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg,
            },{
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        return ( 
            <div>
                <NavBar mode='dark' className='nav-bar'>{navList.find(v=>v.path==pathname).title}</NavBar>
                    <div>
                          <Switch>
                              {
                                  navList.map(item=>(
                                      <Route key={item.path} path={item.path} component={item.component}/>
                                  ))}
                          </Switch>
                    </div>
                <NavLinkBar data={navList} ></NavLinkBar>
            </div>
         );
    }
}
 
export default DashBoard;
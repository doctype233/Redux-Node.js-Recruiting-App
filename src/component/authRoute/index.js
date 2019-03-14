import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter
class AuthRoute extends Component {
    componentDidMount() {
        console.log(this.props)
        let path = ['/login', '/regist'], pathname = this.props.location.pathname;
        if (path.indexOf(pathname) > -1) {
            return null
        } else {
            axios.get('/user/info').then(res => {
                if (res.status === 200) {
                    if (res.data.code === 0) {
                        //有登录信息
                    } else {
                        this.props.history.push('/login')
                    }
                }
            })
        }
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default AuthRoute;
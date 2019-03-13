import React, { Component } from 'react';
import axios from 'axios';

class AuthRoute extends Component {
    componentDidMount(){
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                console.log(res.data)
            }
        })
    }
    render() { 
        return ( 
            <div>??</div>
         );
    }
}
 
export default AuthRoute;
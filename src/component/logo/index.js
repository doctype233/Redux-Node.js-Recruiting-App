import React, { Component } from 'react';
import logoImg from '@/media/logo.png';
import './index.css';


class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='logo-container'>
                <img src={logoImg} alt=''/>
            </div>
         );
    }
}
 
export default Logo;
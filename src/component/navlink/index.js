import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

@withRouter
class NavLinkBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const navList=this.props.data.filter(v=>!v.hide)
        const {pathname}=this.props.location;
        return (
            
            <TabBar >
                {
                    navList.map(v=>(
                        <TabBar.Item
                            title={v.text}
                            key={v.path}
                            icon={{uri:require(`../../media/navImg/${v.icon}.png`)}}
                            selectedIcon={{uri:require(`../../media/navImg/${v.icon}-active.png`)}}
                            selected={v.path==pathname}
                            onPress={()=>this.props.history.push(v.path)}
                        >
                        </TabBar.Item>
                    ))
                }
            </TabBar>
        );
    }
}
NavLinkBar.propTypes = {
    data: PropTypes.array.isRequired
};
export default NavLinkBar;
import React, { Component } from 'react';
import { Grid,List} from 'antd-mobile';
import PropTypes from 'prop-types';

class AvatarSelector extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }
   
    render() {
        const avatarList = 'boy1,boy2,boy3,boy4,girl1,girl2,girl3,girl4'
                            .split(',')
                            .map(item=>({
                                icon:require(`../../media/avatar/${item}.png`),
                                text:item
                            }))
        const gridHeader=this.state.text?<div><span>已选择头像</span><img style={{width:20,padding:'0 10px',verticalAlign:'middle'}} src={this.state.icon}></img></div>
                                        :'请选择头像'
        return (
            <div>
                <List renderHeader={gridHeader}>
                    <Grid
                        data={avatarList}
                        hasLine={false}
                        onClick={elem=>{
                            this.setState(elem)
                            this.props.selectAvatar(elem.text)
                        }}
                    />
                </List>
            </div>
        );
    }
}
AvatarSelector.propTypes = {
    selectAvatar: PropTypes.func.isRequired
  };
export default AvatarSelector;
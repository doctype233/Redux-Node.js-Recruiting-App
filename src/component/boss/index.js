import React, { Component } from 'react';
import { WingBlank, Card, WhiteSpace } from 'antd-mobile';
import axios from 'axios';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get('/user/list?type=genius')
            .then(res => {
                if (res.data.code == 0) {
                    this.setState({ data: res.data.data })
                }
            })
    }
    render() {
        return (
            <WingBlank>
                <WhiteSpace />
                {
                    this.state.data.map(v => (
                        v.avatar ?
                            <div key={v._id}>
                                <Card >
                                    <Card.Header
                                        title={v.user}
                                        thumb={require(`../../media/avatar/${v.avatar}.png`)}
                                        extra={v.title}
                                        
                                    >
                                    </Card.Header>
                                    <Card.Body >
                                        {
                                            v.desc.split('\n').map(v=>(
                                                <div key={v._id}>{v}</div>
                                            ))
                                        }
                                    </Card.Body>
                                </Card>
                                <WhiteSpace/>
                            </div>
                            : null
                    ))
                }
            </WingBlank>
        );
    }
}

export default Boss;
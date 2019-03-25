import React, { Component } from 'react';
import {List} from 'antd-mobile';
import {connect} from 'react-redux'; //获取外部参数的关键部分
import {getUserData} from './auth.redux';
// const mapStateProps=(state)=>{//将state塞进props里面
//     return {num:state}
// }
// const actionCreator ={add,remove,addAsync} //将action塞进props里面
// App=connect(mapStateProps,actionCreator)(App) //获取外部参数的关键部分

@connect( 
    state=>state,  //组件需要的state
    {getUserData}//使用到的方法放进props，自动 dispatch
)
class App extends Component {
    componentDidMount(){
        this.props.getUserData()
    }
    render() {

        return (
            <div>
                <List renderHeader={() => 'Basic Style'} >
                </List>
                {/* <h2>现在数量:{this.props.num}</h2>
                <Button type='primary' onClick={this.props.add}>点击增加</Button>
                <Button type='primary' onClick={this.props.remove}>点击减少</Button>
                <Button type='primary' onClick={this.props.addAsync}>点击延迟2秒增加</Button> */}
            </div>
        );
    }
}


export default App;
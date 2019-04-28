import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '@/container/login';
import Regist from '@/container/regist';
import BossInfo from '@/container/bossinfo';
import GeniusInfo from '@/container/geniusinfo';
import AuthRoute from '@/component/authRoute';
import DashBoard from '@/component/dashboard';
import reducer from './reducer';
import './config';
import './index.css'


const store = createStore(reducer, applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute />
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/regist' component={Regist}></Route>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/geniusinfo' component={GeniusInfo}></Route>
                    <Route component={DashBoard}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'))

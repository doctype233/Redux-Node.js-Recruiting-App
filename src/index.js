import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '@/container/login';
import Regist from '@/container/regist';
import reducer from './reducer';
import './config';


// const store = createStore(reducer, applyMiddleware(thunk))


ReactDom.render(
   
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/login' component={Login}>登录</Route>
                    <Route path='/regist' component={Regist}>注册</Route>
                </Switch>
            </div>
        </BrowserRouter>
    ,
    document.getElementById('root'))

import axios from 'axios';
import { getRedirectPath } from '@/util.js';

const REGIST_SUCCESS = 'REGIST_SUCCESS';
const REGIST_ERROR = 'REGIST_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOAD_DATA = "LOAD_DATA";

const initState = {
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: '',
}
//reducer，state的最终改变来自reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGIST_SUCCESS:
            return { ...state, isAuthor: true, ...action.data, redirectTo: getRedirectPath(action.data) }
        case LOGIN_SUCCESS:
            return { ...state, isAuthor: true, ...action.data, redirectTo: getRedirectPath(action.data) }
        case REGIST_ERROR:
            return { ...state, isAuthor: false, msg: action.msg }
        case LOAD_DATA:
            return { ...state, ...action.data }
        default:
            return state
    }
}

//页面会用到的函数
export function regist({ user, pwd, repeatPwd, type }) {
    if (!user || !pwd || !type) {
        return errorMsg('请输入关键信息！')
    }
    if (pwd !== repeatPwd) {
        return errorMsg('请再次确认密码！')
    }
    return dispatch => {
        axios.post('/user/regist', { user, pwd, type }).then(res => {
            if (res.status === 200 && res.data.code == 0) {
                dispatch(registSuccess({ user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function login({ user, pwd }) {
    if (!user || !pwd) {
        return errorMsg('请输入关键信息！')
    }
    return dispatch => {
        axios.post('/user/login', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code == 0) {
                console.log(res.data)
                dispatch(loginSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function loadUserInfo(userinfo) {
    return {userinfo,type:LOAD_DATA}
}
export function update(info){
    // dispatch=>{

    // }
}

function errorMsg(msg) {
    return { msg, type: REGIST_ERROR }
}

function registSuccess(data) {
    console.log('1',data)
    return { data, type: REGIST_SUCCESS }
}

function loginSuccess(data) {
    return { data, type: LOGIN_SUCCESS }
}
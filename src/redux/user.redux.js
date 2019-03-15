import axios from 'axios';

const REGIST_SUCCESS = 'REGIST_SUCCESS';
const REGIST_ERROR = 'REGIST_ERROR';
const initState = {
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}
//reducer，state的最终改变来自reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGIST_SUCCESS:
            return { ...state, isAuthor: true, ...action.data }
        case REGIST_ERROR:
            return { ...state, isAuthor: false, msg: action.msg }
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
                dispatch(registSuccess({ user, pwd, type }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


function errorMsg(msg) {
    console.log(msg)
    return { msg, type: REGIST_ERROR }
}
function registSuccess(data) {
    console.log(data)

    return {  data, type: REGIST_SUCCESS }
}
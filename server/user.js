const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');
const utils = require('utility');
const _filter = {'pwd':0,'__v':0};

Router.get('/list',function(req,res){
    // User.remove({},function(e,d){});//清空全部数据
    const {type}=req.query;  //筛选
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})

Router.post('/regist',function(req,res){
    console.log(req.body);
    const {user,pwd,type} = req.body;
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复！'})
        }else{
            User.create({user,pwd:md5Pwd(pwd),type},function(e,d){
                if(e){
                    return res.json({code:1,msg:'后端出错了'})
                }
                res.cookie('userId',d._id)
                return res.json({code:0,data:{user,type}})
            })
        }
    })
})
Router.post('/update',function(req,res){
    const userid = req.cookies.userId;
    if(!userid){
        return res.json({code:1})
    }
    User.findByIdAndUpdate(userid,req.body,function(err,doc){
        const data=Object.assign({},{
            user:doc.user,
            type:doc.type
        },req.body)
        return res.json({code:0,data})
    })
})
Router.post('/login',function(req,res){
    const {user,pwd} = req.body;
    User.findOne({user,pwd:md5Pwd(pwd)},{"pwd":0},function(err,doc){
        if(!doc){
            return res.json({code:1})
        }
        res.cookie('userId',doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.get('/info',function(req,res){
    const {userId}=req.cookies;
    if(!userId){
        return res.json({code:1})
    }
    User.findOne({_id:userId},_filter,function(err,doc){
        if(err){
            return res.json({code:1,msg:'/info,后端出错了！'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})
module.exports=Router;

function md5Pwd(pwd){
    const salt='meimei_123_za669560';
    return utils.md5(utils.md5(pwd+salt));
}
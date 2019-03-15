const mongoose = require('mongoose');

//连接mongoose,端口号后为创建的集合名称
const DB_URL = 'mongodb://127.0.0.1:27017/meimei'
mongoose.connect(DB_URL);

const models={
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
        'avatar':{type:String},
        'desc':{type:String},//简介
        'title':{type:String},//职位名称
        //boss还有额外的两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat:{

    }
}

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports={
    getModel:function(name){
        return mongoose.model(name)
    }
}
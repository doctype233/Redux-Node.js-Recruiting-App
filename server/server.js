const express = require('express');
const mongoose = require('mongoose');
const app = express();

//连接mongoose,端口号后为创建的集合名称
const DB_URL = 'mongodb://127.0.0.1:27017/meimei'
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connected success!')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))
//新增数据
// User.create({
//     user:'test1',
//     age:24
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

//过滤删除
// User.remove({age:25},function(doc,err){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })

//更新
// User.update({ user: 'xiaoyu' }, { '$set': { age: 35 } }, function (doc, err) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })


app.get('/', function (req, res) {
    res.send('hello world!')
})

app.get('/data', function (req, res) {
    User.find({}, function (err, doc) {//findOne返回的数据是一个对象，不是数组
        res.json(doc)
    })
})

app.listen('8080', function () {
    console.log('app is start at port 8080')
})
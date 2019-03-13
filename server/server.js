const express = require('express');
const app = express();
const userRouter=require('./user');

app.use('/user',userRouter)



app.listen('8080', function () {
    console.log('app is start at port 8080')
})
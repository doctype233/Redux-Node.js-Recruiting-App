const mongoose = require('mongoose');

//连接mongoose,端口号后为创建的集合名称
const DB_URL = 'mongodb://127.0.0.1:27017/meimei'
mongoose.connect(DB_URL);

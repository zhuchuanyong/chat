const mongoose = require('mongoose');

// 连接
const  db=mongoose.createConnection('mongodb://localhost:27017/chat',{useNewUrlParser: true})

db.on('error', console.error.bind(console, '数据库连接失败'));
db.once('open', function() {
  // we're connected!
  console.log('连接数据库成功');
})

module.exports =db;
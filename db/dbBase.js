const mongoose = require('mongoose')

// 连接本地数据库（test数据库）
const DB_URL = 'mongodb://localhost:27017/test'
mongoose.connect(DB_URL)

mongoose.Promise = global.Promise

// 监听连接状态
const db = mongoose.connection

db.on('error', function (err) {
  console.log(`数据库连接失败: ${err}`)
})

db.on('open', function (res) {
  console.log(`数据库连接成功：${res}`)
})
 

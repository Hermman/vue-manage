const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 创建user集合（表）模型
const UserSchema = new Schema({
  name: String,
  sex: String,
  age: Number,
  city: String
},{
  collation: 'user'  // 指定user表
})


const User = mongoose.model('user', UserSchema)

module.exports = User

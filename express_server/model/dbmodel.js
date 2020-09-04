const mongoose = require('mongoose');
const db = require('../config/db');
const Schema = mongoose.Schema;


// 用户表
const UserSchema = new Schema(
    {
        name: { type: String },  //用户名
        psw: { type: String },  //密码
        email: { type: String },  //邮箱
        sex: { type: String, default: 'asexual' },  //性别
        birth: { type: Date },  //生日
        phone: { type: Number },  //电话
        explain: { type: String },  //介绍
        imgurl: { type: String, default: 'user.png' },  //头像
        time: { type: Date },   //注册时间

    }
)

// 好友表
const FriendSchema = new Schema(
    {
        userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户id
        friendID: { type: Schema.Types.ObjectId, ref: 'User' }, // 好友id
        state: { type: String },  //好友状态 0 已是好友  1 申请中 2 申请发送方
        time: { type: Date },   //生成时间
    }
)

// 一对一消息表
const MessageSchema = new Schema(
    {
        userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户id
        friendID: { type: Schema.Types.ObjectId, ref: 'User' }, // 好友id
        message: { type: String },  // 消息
        type: { type: String }, //内容类型 0 文字  1 图片 2 音频
        time: { type: Date },   //发送时间
        state: { type: Number }, // 接受状态 0 已读 1 未读
    }
)

// 群表
const GroupSchema = new Schema(
    {
        userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户id
        name: { type: String, ref: 'User' }, // 群名称
        imgurl: { type: String, default: 'user.png' },  //群头像
        notice: { type: String },  // 群公告
        time: { type: Date },   //创建时间
    }
)

// 群成员表
const GroupUserSchema = new Schema(
    {
        GroupID: { type: Schema.Types.ObjectId, ref: 'Group' }, // 用户id
        userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户id
        name: { type: String, ref: 'User' }, // 群内名称
        tip: { type: Number,default:0}, // 未读消息数
        time: { type: Date },   //加入时间
        shieid: { type: Number }, //  是否屏蔽群消息  0 未屏蔽  1屏蔽
    }
)

// 一对一消息表
const GroupMsgSchema = new Schema(
    {
        GroupID: { type: Schema.Types.ObjectId, ref: 'Group' }, // 群id
        userID: { type: Schema.Types.ObjectId, ref: 'User' }, // 用户id
        message: { type: String },  // 消息
        type: { type: String }, //内容类型 0 文字  1 图片 2 音频
        time: { type: Date },   //发送时间
    }
)

module.exports = db.model('User', UserSchema)
module.exports = db.model('Friend', FriendSchema)
module.exports = db.model('Message', MessageSchema)
module.exports = db.model('Group', GroupSchema)
module.exports = db.model('GroupUser', GroupUserSchema)
module.exports = db.model('GroupMsg', GroupMsgSchema)
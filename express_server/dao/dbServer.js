const dbmodel= require('../model/dbmodel');

const User=dbmodel.model('User')

exports.findUser=function(res){
    User.find((err,val)=>{
        if(err) {
            console.log('用户数据查找失败'+err);
        }else {
            res.send(val)
        }
    })
}
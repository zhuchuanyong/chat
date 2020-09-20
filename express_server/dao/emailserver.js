const nodemailer  = require('nodemailer')
const credentials = require('../config/credentials')

// 创建传输方式
let transporter = nodemailer.createTransport({
    service:'qq',
    auth: {
      user: credentials.qq.user, // generated ethereal user
      pass: credentials.qq.pass, // generated ethereal password
    },
  });

  // 注册发送邮件给用户

  exports.emailSignUp=(email,res)=>{
      console.log(email);

        // 发送信息内容
    let options={
        from: '1251637837@qq.com',
        to: email,
        subject: '注册',
        html:'<div>哈哈哈哈www</div>'
    };

    // 发送邮件
    transporter.sendMail(options,(err,msg)=>{
        if(err){
            console.log('err', err)
            res.send(`邮箱发送失败email:${email}`)
        }else {
            console.log('msg', msg)
            res.send('邮箱发送成功')
        }
    })
  }

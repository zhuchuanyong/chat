const dbServer = require('../dao/dbServer')

const emailServer = require('../dao/emailServer')
module.exports =function(app){
    app.get('/test',(req,res)=> {
        // dbServer.findUser(res)
        res.send('test2333')
    })
   

    app.post('/mail',(req,res)=> {
       let mail = req.body.mail;
       console.log('mail', mail)
       emailServer.emailSignUp(mail,res)
    //    res.send(mail)
    })
    
}
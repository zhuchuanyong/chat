const dbServer = require('../dao/dbServer')
module.exports =function(app){
    app.get('/test',(req,res)=> {
        dbServer.findUser(res)
        // res.send('test2333')
    })
   
    
}
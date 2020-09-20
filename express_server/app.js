const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const router =require('./router')
const app = express()
const port = 3003


app.use(cors())
app.use(bodyParser.json())
router(app)

app.get('/', (req, res) => res.send('Hello World!'))

// 404
app.use((req,res,next)=>{
    let err =new Error("Not Found")
    err.status =404;
    next(err)
})

// 出现错误处理 500 
app.use((err,req,res,next)=>{
   res.status(err.status||500)
    res.send(err.message)

})


app.listen(port, () => console.log(`5 4 3 2 1  ${port}!`))
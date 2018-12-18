const express = require('express')
const app = express()

app.get('/', function(req, res, next){
    res.send("hello world !")
})
app.listen(8080, function(){
    console.log('port created successfully')
})

app.get("/haha",(req, res, next) => {
    res.send("hahaha")
})
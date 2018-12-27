//引入所需要的插件
var express = require('express');
var ejs = require('ejs');
//为express设置接受参数
var app = express();

//识别ejs代码
app.set('view engine','ejs');
//识别css样式,不引入将不知道外部样式表
app.use('/assets',express.static('assets'));
//设置views的路径
app.set('views', __dirname);

var data = {"name":"yuanhong","age":28,"like":"movie"};
app.get('/',function(req,res){
    console.log(__dirname);
    res.render('ejsTest.ejs',data);
});

app.listen(8080);
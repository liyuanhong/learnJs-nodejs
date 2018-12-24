/********************************************
        搭建一个简单的nodejs服务器
         通过路由来跳转不同的页面
   产考地址：http://www.runoob.com/nodejs/nodejs-router.html
 ********************************************/

var http = require("http");
var url = require("url");
var router = require("./router/router")
var fs = require('fs');


function start(router){
    var onRequest = function(req,res){
        var pathname = url.parse(req.url).pathname;

        if(pathname != "/favicon.ico"){
            var path = router.router(pathname);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(fs.readFileSync(path));
            res.end();
        }
    }

    http.createServer(onRequest).listen(8080);
}

start(router);
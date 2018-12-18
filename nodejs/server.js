/********************************************
              搭建一个简单的nodejs服务器
          参考地址：http://www.cnblogs.com/shinhwazt/p/6083853.html
 ********************************************/

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello NodeJs");
    response.end();
    //response.end('Hello World\n');
}).listen(8080);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');
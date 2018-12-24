/********************************

 使用nodejs展示一个html文件页面

 *********************************/

var http = require("http");
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(fs.readFileSync(__dirname + '/views/hello.html'));
    res.end();
}).listen(8080);

console.log(__dirname);
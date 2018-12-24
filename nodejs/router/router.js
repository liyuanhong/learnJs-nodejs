/*************************************
           定义一个路由文件
 *************************************/

var fs = require('fs');


/*
首先判断路径或文件是否存在，如果不存在定位到404
如果存在，这判断是否为目录，如果是目定位到index，如果不是定位到404
 */
function router(pathname){
    //可以在这里添加路由条件
    var path = __dirname + "/.." + pathname;

    if(fs.existsSync(path)){
        console.log(fs.statSync(path).isDirectory());
        if(fs.statSync(path).isDirectory()){
            path = __dirname + "/index.html"
        }else{
            path = __dirname + "/404.html"
        }
    }else{
        path = __dirname + "/404.html"
    }
    //path = __dirname + "/.." + "/router/hello.html"
    console.log("路由到了这里：" + path);
    return path;
}

exports.router = router;
//nodejs中模块化编程最主要的一个特征就是常常可以在很多js文件看到require()，
// 也就是引入其他的js文件，非常类似与其他语言中的import或include。同时如果想要require('A')，
// 那么在A文件中必须要使用exports这个关键字表明要导出什么变量或函数。

function imported_hello(){
	console.log("this is imported_hello file !");
}


/*
hello 方法没有被exports导出，因此无法在外部调用
 */
function hello(){
	console.log("hello !");
}

//通过exports 导出该函数，并在其他js文件中通过require来导入
exports.imported_hello = imported_hello;


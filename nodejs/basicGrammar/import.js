//java和python使用import来导入其他函数库,而php和ruby是通过require,上边也说过,nodejs是基于CommonJS的,在node中我们可以使用require这个关键字来导入模块

var fun = require("./imported_file.js");
fun.imported_hello();
//fun.hello();    我发调用没有导出的方法（exports出来的方法）


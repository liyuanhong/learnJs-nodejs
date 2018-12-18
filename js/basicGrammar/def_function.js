/*
学习js函数的定义方式
以及js匿名函数和自执行函数
参考地址：https://blog.csdn.net/xixiruyiruyi/article/details/54894404
        https://www.cnblogs.com/jiejiejy/p/7434857.html
 */

/********************************************************
                   javascript 函数的声明
 ********************************************************/
//1、声明方式
function  sum(a,b){
    console.log(a + b);
}
sum(1,2);

//2、函数表达式
var sum_1 = function(a,b){
    console.log(a + b);
}
sum_1(2,3);

/********************************************************
匿名函数，顾名思义就是没有名字的函数。
上面的函数表达式中的创建，即创建一个匿名函数，
并将匿名函数赋值给变量sum_1，用sum_1来进行函数的调用，调用的方式就是在变量sum_1后面加上一对括号()，
如果有参数传入的话就是sum_1(1,2)，这就是匿名函数的一种调用方式。
 ********************************************************/
var noName_fun = function(a,b){
    console.log(a + b);
}
noName_fun(3,4);

//还有一种匿名函数的调用方式是：使用()将匿名函数括起来，然后后面再加一对小括号（包含参数列表）
(
    function(a,b){
        console.log(a + b);
    }
)(4,5);



/********************************************************
             javascript 自执行函数
 ********************************************************/
// 我们创建了一个匿名的函数，并立即执行它，由于外部无法引用它内部的变量，
// 因此在执行完后很快就会被释放，关键是这种机制不会污染全局对象。
// 自执行函数，即定义和调用合为一体。
//自执行函数的3种写法
// 方法一：使用()值包裹函数值
(function(a,b){
    console.log(a + b);
})(5,6);

//方法二：使用()将函数及函数后的括号包裹
(function(a,b){
    console.log(a + b);
}(6,7));

//方法三：在function的前面加上操作符
!function(a,b){             //加！号为常用方法
    console.log(a + b);
}(7,8);

new function(a,b){
    console.log(a + b);
}(7,8);

var aaa = function(a,b){
    console.log(a + b);
}(7,8);

~function(a,b){
    console.log(a + b);
}(7,8);

-function(a,b){
    console.log(a + b);
}(7,8);

+function(a,b){
    console.log(a + b);
}(7,8);

0,function(a,b){
    console.log(a + b);
}(7,8);







/**
 * Created by tanwu on 2017/7/20.
 */

//函数参数的默认值
//ES6之前，不能直接为函数的参数指定默认值，只能采用变通的方法
//function logMsg(x, y){
//    //如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用
//    //y = y || 'World!';
//    if(typeof y === undefined){
//        y = 'World';
//    }
//    console.log(x, y);
//}
//console.log(logMsg('Hello'));
//console.log(logMsg('Hello', 'China'));
//console.log(logMsg('Hello', ''));

//ES6--写法简洁，非常自然
//function logMsg(x, y='World'){
//    console.log(x, y);
//}
////console.log(logMsg('Hello'));
////console.log(logMsg('Hello', 'China'));
//console.log(logMsg('Hello', ''));

//好处：1、阅读代码的人，可以立刻意识到哪些参数是可以省略的，不用查看函数体或文档
//2、有利于将来的代码优化，即使未来的版本在对外接口中，彻底拿掉这个参数，也不会导致以前的代码无法运行
//function Point(x=0, y=0){
//    this.x = x;
//    this.y = y;
//}
//let p = new Point();
//console.log(p);

//参数变量是默认声明的，所以不用使用let或const再次声明
//function foo(x=5){
//    let x = 1;
//    //const x = 2;
//}

//一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的
//let x = 99;
//function foo(p = x+1){
//    console.log(p);
//}
//console.log(foo());
//x = 100;
//console.log(foo());

//与解构赋值默认值结合使用
//function foo({x, y=5}){
//    console.log(x, y);
//}
////console.log(foo({}));
////console.log(foo({x: 1}));
////console.log(foo({x: 1, y: 2}));
//console.log(foo());

//function fetch(url, {body='', method='GET', headers={}}){
//    console.log(method);
//}
////console.log(fetch('http://www.baidu.com', {}));
//console.log(fetch('http://www.baidu.com'));

//结合函数参数的默认值，就可以省略第二个参数，就出现了双重默认值
//function fetch(url, {method='GET'} = {}){
//    console.log(method);
//}
//fetch('http://www.baidu.com');

//两种写法的区别？
//function m1({x=0, y=0} = {}){
//    return [x, y];
//}
//function m2({x, y} = {x: 0, y: 0}){
//    return [x, y];
//}
//console.log(m1());
//console.log(m2());

//参数默认值的位置
//通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的
//function f(x=1, y){
//    return [x, y];
//}
////console.log(f());
////console.log(f(1));
////console.log(f(, 1));
//console.log(f(undefined, 1));

//function f(x, y=5, z){
//    return [x, y, z];
//}
////console.log(f());
////console.log(f(1));
////console.log(f(1 , , 1));
//console.log(f(1, undefined, 2));

//如果传入undefined，将触发该参数等于默认值，null则没有这个效果
//function foo(x=5, y=6){
//    console.log(x, y);
//}
//console.log(foo(undefined, null));

//函数的 length 属性
//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真
//console.log((function (a){}).length);
//console.log((function (a=5){}).length);
//console.log((function (a,b,c=5){}).length);

//rest
//console.log((function (...args){}).length);

//如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
//console.log((function(a=0, b, c){}).length);
//console.log((function(a, b=1, c){}).length);

//作用域





























































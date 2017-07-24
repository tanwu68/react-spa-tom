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























































































